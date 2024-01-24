import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginBox from './components/LoginBox';

function App() {
  return (
    <div style={{ backgroundColor: '#e6eaf0', textAlign: 'center' }}>
      <Header />
      <div style={{ position: 'relative' }}>
        <LoginBox />
        <p style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bold' }}>
          ¡Mírame, estoy triunfando, funciona! si lees esto me debes un helado
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;


