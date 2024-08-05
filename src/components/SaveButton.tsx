import styled from "styled-components";
import tick from "../assets/tick.svg";
import { SaveButtonProps } from "../types/types";

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["isSaved"].includes(prop),
})<SaveButtonProps>`
  width: 186px;
  height: 46px;
  padding: 0;
  display: flex;
  align-items: ${({ isSaved }) => (isSaved ? "start" : "center")};
  justify-content: ${({ isSaved }) => (isSaved ? "flex-start" : "center")};
  gap: 9px;
  background-color: ${({ isSaved }) => (isSaved ? "#FFFFFF" : "#F50634")};
  color: ${({ isSaved }) => (isSaved ? "#B9B9B9" : "#FFFFFF")};
  font-weight: bold;
  border-radius: 3px;
  border: none;
  cursor: ${({ isSaved }) => (isSaved ? "default" : "pointer")};
  user-select: none;
  appearance: none;
  touch-action: manipulation;

  &:hover {
    background-color: ${({ isSaved }) => (isSaved ? "#FFFFFF" : "#AA0424")};
  }

  &:active {
    transform: ${({ isSaved }) => (isSaved ? "none" : "scale(0.96)")};
  }
`;

const SaveButton = ({ isSaved, onClick }: SaveButtonProps) => {
  return (
    <Button isSaved={isSaved} onClick={onClick}>
      {isSaved ? (
        <>
          <img src={tick} alt="Сохранено" />
          Сохранено
        </>
      ) : (
        <>Сохранить</>
      )}
    </Button>
  );
};

export default SaveButton;
