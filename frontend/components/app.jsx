import React from 'react';
import HeaderContainer from './header/header_container';
import Homepage from './homepage/homepage';
import Footer from './footer/footer';

const App = ({children}) => (
  <div>
    <HeaderContainer/>
    {children}
    <Homepage/>
    <Footer/>
  </div>
);

export default App;
