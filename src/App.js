// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  const toggleMode= ()=>{
    
    if(mode === 'light'){
      setMode('dark');

    }
    else{
      setMode('light');
    }
  }
  return (
      <>
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} aboutText="About TextUtils"   />
      
      <div className="container my-3">
      <TextForm  heading="Enter text to analayze below"/> 
      {/* <About></About> */}

      </div>
      
</>
      
  );
}

export default App;
