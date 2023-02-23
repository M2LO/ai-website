import React from 'react';

import { Footer, Blog,Possibility, Features, WhatGTP3, Header } from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>

      <Brand></Brand>
      <WhatGTP3></WhatGTP3>
      <Features></Features>  
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
}
export default App