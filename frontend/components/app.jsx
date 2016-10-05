import React from 'react';
import HeaderContainer from './header/header_container';
import Homepage from './homepage/homepage';

const App = ({children}) => (
  <div>
    <HeaderContainer/>
    {children}
    <Homepage/>
  </div>
);

export default App;
