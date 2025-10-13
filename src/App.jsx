import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Project from './component/Project.jsx';
import Sertificates from './component/Sertificates.jsx';
import Contact from './component/Contact.jsx';
import Feedback from './component/Feedback.jsx';
import Theme from './component/Theme.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Aside />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/sertificates" element={<Sertificates />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      <Theme />
    </Router>
  );
}
export default App;
