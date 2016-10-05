import React from 'react';
import HeaderContainer from './header/header_container';
import SessionModal from './modal/session_modal';

const App = ({children}) => (
  <div>
    <HeaderContainer/>
    {children}
  </div>
);

export default App;
