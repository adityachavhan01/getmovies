// App.js

import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MovieList from './MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <MovieList />
      </div>
    </div>
  );
}

export default App;
