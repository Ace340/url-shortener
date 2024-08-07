import React from 'react';
import UrlShortener from './components/UrlShortener';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>URL Shortener</h1>
        <UrlShortener />
      </header>
    </div>
  );
}

export default App;