import React, { useState, useEffect } from "react";
import myimg from "../assets/myimg.jpg";

function Content() {
  // Array of quotes (you can add as many as you like)
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "The only way to learn a new programming language is by writing programs in it. – Dennis Ritchie",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson"
  ];

  // State to hold the selected quote
  const [quote, setQuote] = useState("");

  // Pick a random quote when the page loads
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <>
      <div className="main-content">
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

                <h4>I am a skilled web designer passionate about creating modern, responsive websites. "Code is like humor. When you have to explain it, it’s bad."</h4>

                {/* Show random quote here */}
                <p style={{ fontStyle: "italic", fontSize: "18px" }}>{quote}</p>

                <a href="#Contact" className="btn hire-me">
                  Hire Me
                </a>
              </div>
              <div className="home-img padd-15">
                <img src={myimg} alt="my image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
