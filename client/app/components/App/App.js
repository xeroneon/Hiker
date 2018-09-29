import React, { Component } from 'react';

// import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

document.body.style = "";



const App = ({ children }) => (
  <>
    {/* <Nav /> */}

    <main className='main h-100'>
      {children}
    </main>

    <Footer />
  </>
);

export default App;
