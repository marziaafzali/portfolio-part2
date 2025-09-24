import { useState, useEffect } from "react";

function Theme() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
   
    const savedDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDark);
    document.body.classList.toggle("dark", savedDark);

    function handleScroll() {
      setIsOpen(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function setActiveStyle(color) {
    let newColor;
    switch (color) {
      case "color-1": newColor = "#ec1839"; break;
      case "color-2": newColor = "#fa5b0f"; break;
      case "color-3": newColor = "#37b182"; break;
      case "color-4": newColor = "#1854b4"; break;
      case "color-5": newColor = "#f021b2"; break;
      default: newColor = "#ec1839";
    }
    document.documentElement.style.setProperty("--skin-color", newColor);
    localStorage.setItem("themeColor", newColor); 
  }

  function toggleDarkMode() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode);
  }

  useEffect(() => {
    
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
      document.documentElement.style.setProperty("--skin-color", savedColor);
    }
  }, []);

  return (
    <div className={`style-switcher ${isOpen ? "open" : ""}`}>
     
      <div
        className="style-switcher-toggler s-icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-cog fa-spin"></i>
      </div>

      
      <div className="day-night s-icon" onClick={toggleDarkMode}>
        <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
      </div>

      <h4>Theme Color</h4>
      <div className="colors">
        <span className="color-1" onClick={() => setActiveStyle("color-1")}></span>
        <span className="color-2" onClick={() => setActiveStyle("color-2")}></span>
        <span className="color-3" onClick={() => setActiveStyle("color-3")}></span>
        <span className="color-4" onClick={() => setActiveStyle("color-4")}></span>
        <span className="color-5" onClick={() => setActiveStyle("color-5")}></span>
      </div>
    </div>
  );
}

export default Theme;
