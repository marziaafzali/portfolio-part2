import { useState } from "react";
import { FaQuoteLeft, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Aside() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger button visible on small screens 
      <div className="nav-toggler" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>*/}

      {/* Sidebar */}
      <div className={`aside ${menuOpen ? "open" : ""}`}>
        <div className="logo">
          <Link to="/"><span>M</span>rzia</Link>
        </div>

        <ul className="nav">
          <li><Link  to="/" onClick={() => setMenuOpen(false)}><span><i className="fa fa-home"></i> Home </span></Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}><i className="fa fa-user"></i> About</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}><i className="fa fa-briefcase"></i> Projects</Link></li>
          <li><Link to="/sertificates" onClick={() => setMenuOpen(false)}><i className="fas fa-certificate"></i> Sertificate</Link></li>
          <li><Link to="/feedback" onClick={() => setMenuOpen(false)}><FaQuoteLeft style={{ marginRight: "8px" }} /> Testimonial</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}><i className="fa fa-comments"></i> Contact</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Aside;
