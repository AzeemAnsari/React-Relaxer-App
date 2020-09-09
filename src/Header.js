import React from 'react';

import { H1, LogoDiv } from './Styles';

const Header = ({ Logo }) => {
  return (
    <header>
      <LogoDiv>
        <img src={Logo} alt="Azeem Ansari" />
      </LogoDiv>
      <H1>Relaxer</H1>
    </header>
  );
};

export default Header;
