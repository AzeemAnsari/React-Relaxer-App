import React from 'react';

const Header = ({ Logo }) => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Azeem Ansari" />
      </div>
      <h1>Relaxer</h1>
    </header>
  );
};

export default Header;
