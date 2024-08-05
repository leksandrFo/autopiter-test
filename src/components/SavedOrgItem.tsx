import React, { useState } from "react";
import styled from "styled-components";
import remove from "../assets/remove.svg";
import arrow from "../assets/arrow.svg";
import { SavedOrgItemProps } from "../types/types.ts";

const Container = styled.div`
  width: 100%;
  min-height: 80px;
  box-sizing: border-box;
  outline: 1px solid #dfdfdf;
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 3px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const OrganizationCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrganizationName = styled.div`
  margin-bottom: 12px;
  font-size: 1.286rem;
  font-weight: bold;
  line-height: 20px;
`;

const OrganizationInfo = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isCollapsed",
})<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ isCollapsed }) => (isCollapsed ? "10px" : "117px")};
  margin-bottom: ${({ isCollapsed }) => (isCollapsed ? "0px" : "19px")};
`;

const Options = styled.div`
  width: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: #777777;
`;

const InfoItem = styled.p`
  color: #777777;
`;

const Text = styled.span`
  color: #2b2829;
`;

const Remove = styled.img`
  cursor: pointer;
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: underline;
  color: inherit;
  cursor: pointer;
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 4px;
`;

const Image = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "isCollapsed",
})<{ isCollapsed: boolean }>`
  transform: ${({ isCollapsed }) =>
    isCollapsed ? "rotate(0deg)" : "rotate(180deg)"};
`;

const SavedOrgItem: React.FC<SavedOrgItemProps> = ({
  organization,
  onRemove,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleRemoveClick = () => {
    onRemove(organization.data.inn);
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Container>
      <OrganizationCard>
        <Column>
          <OrganizationName>{organization.value}</OrganizationName>
          <OrganizationInfo isCollapsed={isCollapsed}>
            <InfoItem>
              ИНН: <Text>{organization.data?.inn}</Text>
            </InfoItem>
            {!isCollapsed && (
              <>
                <InfoItem>
                  КПП: <Text>{organization.data?.kpp || "Нет данных"}</Text>
                </InfoItem>
                <InfoItem>
                  ОГРН: <Text>{organization.data?.ogrn || "Нет данных"}</Text>
                </InfoItem>
                <InfoItem>
                  Юридический адрес:{" "}
                  <Text>
                    {organization.data?.address
                      ? organization.data.address.value
                      : "Нет данных"}
                  </Text>
                </InfoItem>
                <InfoItem>
                  Генеральный директор:{" "}
                  <Text>
                    {organization.data?.management
                      ? organization.data.management.name
                      : "Нет данных"}
                  </Text>
                </InfoItem>
              </>
            )}
          </OrganizationInfo>
        </Column>
        <Options>
          <Remove src={remove} alt="Удалить" onClick={handleRemoveClick} />
          <Link onClick={handleToggleCollapse}>
            <p>{isCollapsed ? "подробнее" : "скрыть подробности"}</p>{" "}
            <Image src={arrow} alt="Стрелка" isCollapsed={isCollapsed} />
          </Link>
        </Options>
      </OrganizationCard>
    </Container>
  );
};

export default SavedOrgItem;
