import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



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
           
          <Router>
                <Navbar title="Text-App" about="About" mode={mode}  togglemode={togglemode} />
                <Routes>
                    <Route path='/about' element={<About />}/>
                      
                    <Route path='/' element={ <TextForm heading="Text-Formating" mode={mode} />} />
                      
              </Routes>
          </Router>
     </>
  );
}

export default App;
