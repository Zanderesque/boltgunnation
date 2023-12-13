import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Facebook from './components/Facebook';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Facebook />
      </div>
      <Footer />
    </div>
  );
}

export default App;
