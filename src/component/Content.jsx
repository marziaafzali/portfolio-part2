import React, { useState, useEffect } from "react";
import Profile from "../assets/profile.jpg";
import myimg from "../assets/myimg.jpg";

function Content() {
  // Array of quotes 
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson"
  ];

  
  const [quote, setQuote] = useState("");

  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <>
     
        <div className="home section">
          <div className="container">
            <div className="row">
              <div className="home-info padd-15">
                <h3 className="hello">
                  Hello, my name is <span className="name">Marzia Afzali</span>
                </h3>
                <h3 className="my-profession">
                  I&apos;m a <span className="typing">web designer</span>
                </h3>

                <h4>  I am a passionate and detail-oriented developer with expertise in modern web technologies and design tools.  
        I create responsive, user-friendly, and visually appealing websites using <strong>HTML, CSS, JavaScript, React, Bootstrap</strong>.  
        I also work with <strong>Python</strong> for backend development, manage data efficiently with <strong>Databases</strong>, and design creative graphics using <strong>Photoshop</strong>.  
        Additionally, I have experience building and customizing websites on <strong>WordPress</strong>.
      </h4>

                
                <p style={{ fontStyle: "italic", fontSize: "18px", marginTop:"30px" }}>{quote}</p>

                <a href="/Contact" className="btn hire-me">
                  Hire Me
                </a>
              </div>
              <div className="home-img padd-15">
                <img src={myimg} alt="my image" />
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Content;
