import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaQuoteLeft, FaBars, FaTimes } from "react-icons/fa";

function Aside() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", icon: "fa fa-home", label: "Home", exact: true },
    { path: "/about", icon: "fa fa-user", label: "About" },
    { path: "/projects", icon: "fa fa-briefcase", label: "Projects" },
    { path: "/sertificates", icon: "fas fa-certificate", label: "Certificate" },
   // { path: "/feedback", icon: <FaQuoteLeft style={{  marginRight: "10px" }} />, label: "Testimonial" },
    { path: "/contact", icon: "fa fa-comments", label: "Contact" },
  ];

  return (
    <>
      {/* Hamburger button (visible on small screens) */}
      <div className="nav-toggler" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}
      <aside className={`aside ${menuOpen ? "open" : ""}`}>
        <div className="logo">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            <span>M</span>arzia
          </NavLink>
        </div>

        <ul className="nav">
<<<<<<< Updated upstream
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                end={item.exact}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {typeof item.icon === "string" ? (
                  <i className={item.icon}></i>
                ) : (
                  item.icon
                )}
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
=======
          <li><Link  to="/" onClick={() => setMenuOpen(false)}><span><i className="fa fa-home"></i> Home </span></Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}><i className="fa fa-user"></i> About</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}><i className="fa fa-briefcase"></i> Projects</Link></li>
          <li><Link to="/sertificates" onClick={() => setMenuOpen(false)}><i className="fas fa-certificate"></i> Sertificate</Link></li>
          {/*<li><Link to="/feedback" onClick={() => setMenuOpen(false)}><FaQuoteLeft style={{ marginRight: "8px" }} /> Testimonial</Link></li>*/}
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}><i className="fa fa-comments"></i> Contact</Link></li>
>>>>>>> Stashed changes
        </ul>
      </aside>
    </>
  );
}

export default Aside;
