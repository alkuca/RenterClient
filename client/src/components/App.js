import React from 'react';
import '../App.css';
import Sidebar from './Sidebar'
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Sidebar/>
    </div>
  );
}

export default App;