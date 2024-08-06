import React from 'react';
import logo from '../assets/logo.svg'

const Header: React.FC = () => {
  return (
    <header
        // Почему не styled component?
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logo} alt="Logo" />
    </header>
  );
};

export default Header;
