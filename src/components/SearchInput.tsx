import React from "react";
import styled from "styled-components";
import { SearchInputProps } from "../types/types.ts";

const InputContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Input = styled.input`
  position: relative;
  border: 1px solid #e5e5e5;
  margin-top: 3px;
  padding: 13px 72px 12px 16px;
  width: 100%;
  height: 46px;
  border-radius: 3px;
  box-sizing: border-box;
  z-index: 2;

  &::placeholder {
    color: #b9b9b9;
  }

  &:focus {
    border-color: #fae29f;
    outline: none;
  }
`;

const SuggestionList = styled.ul`
  position: absolute;
  width: 100%;
    // Тут магические 4px выглядят не очень.
    // Понимаю что так было быстрее, но это костыль. Правильнее было менять стили инпута при открытом состоянии
  top: calc(100% - 4px);
  left: 0;
  border: 1px solid #e5e5e5;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #ffffff;
  border-radius: 3px;
  box-sizing: border-box;
  z-index: 1;
  max-height: 300px;
  overflow-y: auto;
`;

const SuggestionItem = styled.li`
  min-height: 53px;
  box-sizing: border-box;
  padding: 7px 24px 0;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const OrganizationName = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
  line-height: 140%;
`;

const OrganizationInfo = styled.div`
  line-height: 140%;
`;

const SearchInput: React.FC<SearchInputProps> = ({
  query,
  setQuery,
  suggestions,
  onSelect,
}) => (
  <InputContainer>
    <label>
      Организация или ИП
      <Input
        type="text"
        placeholder="Введите название, ИНН или адрес организации"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <SuggestionList>
          {suggestions.map((item, index) => {
            if (!item || !item.data) {
              return null;
            }
            const { inn, address } = item.data;
            const city = address?.data?.city;
            const cityType = address?.data?.city_type;
            const settlement = address?.data?.settlement;
            const settlementType = address?.data?.settlement_type;
            const unrestrictedValue = address?.unrestricted_value || "";

            const addressInfo =
              cityType && city
                ? `${cityType}. ${city}`
                : settlementType && settlement
                ? `${settlementType}. ${settlement}`
                : unrestrictedValue.split(", ")[1] || "";

            return (
              <SuggestionItem key={index} onClick={() => onSelect(item)}>
                <OrganizationName>{item.value}</OrganizationName>
                <OrganizationInfo>{`${inn} ${addressInfo}`}</OrganizationInfo>
              </SuggestionItem>
            );
          })}
        </SuggestionList>
      )}
    </label>
  </InputContainer>
);

export default SearchInput;
