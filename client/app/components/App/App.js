import React, { Component } from 'react';
import Footer from '../Footer/Footer';

// document.body.style = "";



const App = ({ children }) => (
  <>

    <main>
      {children}
    </main>

    <Footer />
  </>
);

export default App;
