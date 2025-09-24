import { useState } from 'react'
import './App.css';
import './switcher.css';
import './color-1.css';
import './color-2.css';
import './color-3.css';
import './color-4.css';
import './color-5.css';
import Content from './component/Content.jsx';
import Aside from './component/Aside.jsx';
import About from './component/About.jsx';
import Project from './component/Sertificates.jsx';
import Sertificates from './component/Project.jsx';
import Contact from './component/Contact.jsx';
import Theme from './component/Theme.jsx';


function App() {

  return (
    <>
      <div className='Main-container'>

     <Aside/>
     <Content/>
     <About/>
     <Project/>
     <Sertificates/>
     <Contact/>
      </div>
      <Theme/>
    </>
  )
}

export default App
