import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "./SearchInput";
import SavedOrgList from "./SavedOrgList";
import { addOrg, removeOrg } from "../redux/slices/orgSlice";
import styled from "styled-components";
import SelectedOrganization from "./SelectedOrganization.tsx";
import EmptyBlock from "./EmptyBlock.tsx";
import { RootState, Suggestion } from "../types/types.ts";

export const MainCard = styled.div`
  width: 100%;
  min-height: 568px;
  background-color: #ffffff;
  padding: 32px 24px 24px;
  box-sizing: border-box;
`;

const token: string = `${import.meta.env.VITE_API_TOKEN}` || "";

const MainContent = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [selectedOrg, setSelectedOrg] = useState<Suggestion | null>(null);

  const activeSwitch = useSelector(
    (state: RootState) => state.switch.activeSwitch
  );
  const savedOrgs = useSelector(
    (state: RootState) => state.organizations.savedOrgs
  );
  const dispatch = useDispatch();
  const isSaved = selectedOrg
    ? savedOrgs.some((org) => org.data.inn === selectedOrg.data.inn)
    : false;

  useEffect(() => {
    if (query) {
      fetch(
        `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Token " + token,
          },
          body: JSON.stringify({ query }),
        }
      )
        .then((response) => response.json())
        .then((data) => setSuggestions(data.suggestions))
        .catch((err) => console.error(err));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSelectSuggestion = useCallback((org: Suggestion) => {
    setSelectedOrg(org);
    setSuggestions([]);
    setQuery("");
  }, []);

  const handleSaveOrganization = () => {
    if (selectedOrg) {
      dispatch(addOrg(selectedOrg));
    }
  };

  const handleRemoveOrganization = (inn: string) => {
    dispatch(removeOrg(inn));
  };

  return (
    <MainCard>
      {activeSwitch === "new" ? (
        <>
          <SearchInput
            query={query}
            setQuery={setQuery}
            suggestions={suggestions}
            onSelect={handleSelectSuggestion}
          />
          {selectedOrg ? (
            <SelectedOrganization
              selectedOrg={selectedOrg}
              isSaved={isSaved}
              handleSaveOrganization={handleSaveOrganization}
            />
          ) : (
            <EmptyBlock />
          )}
        </>
      ) : (
        <SavedOrgList
          savedOrgs={savedOrgs}
          onRemove={handleRemoveOrganization}
        />
      )}
    </MainCard>
  );
};

export default MainContent;
