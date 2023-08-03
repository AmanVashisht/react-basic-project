import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react'


function App() {

  const [mode, setMode] = useState('light')

  const togglemode= ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#384148'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
       <Navbar title="Text-App" about="About" mode={mode}  togglemode={togglemode} />
       {/* <Navbar/> */}
       <TextForm heading="Text-Formating" mode={mode} />
       {/* <About /> */}
      </>
  );
}

export default App;
