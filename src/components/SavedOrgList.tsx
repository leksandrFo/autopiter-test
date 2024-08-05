import React from "react";
import styled from "styled-components";
import SavedOrgItem from "./SavedOrgItem.tsx";
import { SavedOrgListProps } from "../types/types.ts";

const SavedOrgListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SavedOrgList: React.FC<SavedOrgListProps> = ({ savedOrgs, onRemove }) => (
  <SavedOrgListContainer>
    {savedOrgs.length !== 0
      ? savedOrgs.map((organization) => (
          <SavedOrgItem
            key={organization.data.inn}
            organization={organization}
            onRemove={onRemove}
          />
        ))
      : "У вас нет сохраненных организаций."}
  </SavedOrgListContainer>
);

export default SavedOrgList;
