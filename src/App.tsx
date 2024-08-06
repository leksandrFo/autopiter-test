import React from "react";
import Header from "./components/Header";
import ToggleSwitch from "./components/ToggleSwitch";
import MainContent from "./components/MainContent";
import styled from "styled-components";

const Container = styled.div`
  width: 736px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: Verdana, sans-serif;
  font-size: 14px;
`;

const Title = styled.h1`
  margin: 56px 0 32px;
    // Что за магические числа в размерах шрифта? К тому же в итоге не соответствует размеру в макете.
    // Рекомендую все размеры шрифта всегда указывать в пикселях
  font-size: 2.857rem;
  line-height: 46px;
  font-weight: bold;
`;

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Мои организации</Title>
        <ToggleSwitch />
        <MainContent />
      </Container>
    </>
  );
};

export default App;
