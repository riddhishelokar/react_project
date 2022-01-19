// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
// import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  const toggleMode= ()=>{
    
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
      <>
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} aboutText="About TextUtils"   />
     {/* <strong> <Alert /></strong>  */}
      
      <div className="container my-3">
      <TextForm  heading="Enter text to analayze below" mode={mode}/> 
      {/* <About></About> */}

      </div>
      
</>
      
  );
}

export default App;
