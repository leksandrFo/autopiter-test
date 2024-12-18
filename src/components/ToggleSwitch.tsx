import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "../redux/slices/switchSlice.ts";
import styled from "styled-components";
import { RootState } from "../types/types";

const Toggler = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  position: relative;
  padding: 8px 24px 11px;
  background-color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#F8F8F8')};
  color: ${({ isActive }) => (isActive ? '#2B2829' : '#B9B9B9')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  line-height: 18px;
  cursor: pointer;
  box-sizing: border-box;

  &::before {
    content: '';
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #F50634;
}`;

const ToggleSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const activeSwitch = useSelector((state: RootState) => state.switch.activeSwitch);
  const savedOrgs = useSelector((state: RootState) => state.organizations.savedOrgs);

  const handleToggle = (switchName: "new" | "saved") => {
    dispatch(toggleSwitch(switchName));
  };

  const isNewActive = activeSwitch === "new";
  const isSavedActive = activeSwitch === "saved";

  return (
    <div style={{ display: "flex" }}>
      <Toggler isActive={isNewActive} onClick={() => handleToggle("new")}>
      <b>
        Новая организация
      </b>
      </Toggler>
      <Toggler isActive={isSavedActive} onClick={() => handleToggle("saved")}>
        {/*  Тег <b> тут лишний, оформление надо делать с помощью css */}
        <b>
        {/*
            Инлайн стили, за редким исключением, всегда плохо.
            Нужно с помощью класса, или в твоем случае, с помощью styled элемента это делать
        */}
        Сохраненные организации <span style={{ color: isSavedActive ? "#C31335" : "#777777" }}>({savedOrgs.length})</span>
        </b>
      </Toggler>
    </div>
  );
};

export default ToggleSwitch;
