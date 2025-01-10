import React from 'react';
import Navbar from './components/Navbar';
import SecTop from './components/SecTop';
import SecAbout from './components/SecAbout';
import Footer from './components/Footer';
import './assets/styles/scss/Main.scss';
// import './assets/script/main.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecTop />
      <SecAbout />
      <Footer />
    </div>
  );
}

export default App;