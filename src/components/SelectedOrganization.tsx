import React from "react";
import styled from "styled-components";
import SaveButton from "./SaveButton";
import { SelectedOrganizationProps } from "../types/types.ts";

const Container = styled.div`
  margin-top: 40px;
`;

const OrganizationName = styled.h2`
  margin: 0;
  margin-bottom: 24px;
  font-size: 1.714rem;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 16px;
  line-height: 100%;
`;

const OrganizationCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.b`
  margin-bottom: 8px;
`;

const Text = styled.p`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoCard = styled.div`
  height: 125px;
  padding: 24px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f8f8f8;
  border-radius: 3px;
  box-sizing: border-box;
`;

const InfoItem = styled.p`
  margin: 0;
  white-space: nowrap;
`;

const SelectedOrganization: React.FC<SelectedOrganizationProps> = ({
  selectedOrg,
  isSaved,
  handleSaveOrganization,
}) => (
  <Container>
    <OrganizationName>{selectedOrg.value}</OrganizationName>
    <OrganizationCard>
      <Column>
        <Title>Юридический адрес</Title>
        <Text>
          {selectedOrg.data?.address?.data?.postal_code || "Нет данных"}
          {selectedOrg.data?.address?.value}
        </Text>
        <Title>Генеральный директор</Title>
        <Text>{selectedOrg.data?.management?.name || "Нет данных"}</Text>
      </Column>
      <InfoCard>
        <InfoItem>
          <b>ИНН</b> {selectedOrg.data?.inn || "Нет данных"}
        </InfoItem>
        <InfoItem>
          <b>КПП</b> {selectedOrg.data?.kpp || "Нет данных"}
        </InfoItem>
        <InfoItem>
          <b>ОГРН</b> {selectedOrg.data?.ogrn || "Нет данных"}
        </InfoItem>
      </InfoCard>
    </OrganizationCard>
    <SaveButton isSaved={isSaved} onClick={handleSaveOrganization} />
  </Container>
);

export default SelectedOrganization;
