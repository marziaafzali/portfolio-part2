import { useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Your full about text
  const aboutText =
  "I am a Computer Science student with a passion for technology, creativity, and problem-solving. As I continue my academic journey, I actively build real-world skills through projects that combine design, functionality, and innovation.My expertise includes HTML, CSS, JavaScript, React, Bootstrap, Python, Databases, WordPress, and Photoshop. I enjoy creating websites that are not only visually appealing but also responsive and user-friendly. Beyond coding, I value clear communication, teamwork, and continuous learning.  My goal is to grow into a versatile developer who can contribute to impactful projects, collaborate with diverse teams, and make technology more accessible and engaging for everyone."
  return (
    <section className="about section" id="about">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="row">
          <div className="about-content padd-15">
            {/* About Text */}
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm Marzia Afzali and <span>Web Developer</span>
                </h3>
                <p>
                  {isExpanded ? aboutText : aboutText.substring(0, 160) + "..."}
                </p>
                <p
                 style={{color:"var(--skin-color)"}}
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Read Less" : "Read More..."}
                </p>
              </div>
            </div>

            {/* Personal Info & Skills */}
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>Birthday : <span>12 Aug 2004</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Age : <span>21</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Website : <span>www.Marzia.com</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Email : <span>afzalimarzia2004@gmail.com</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Degree : <span>Computer Science</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Phone : <span>0748584924</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>City : <span>Kabul-Afghanistan</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Freelance : <span>Available</span></p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="row">
                  <div className="button padd-15">
                    {/*  Download CV Button */}
                    <a
                      href="/marzia afzali_CV.pdf"
                      download="Marzia_CV"
                      className="btn"
                    >
                      Download CV
                    </a>
                    <Link to="/contact" className="btn hire-me">
  Hire Me
</Link>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>HTML & CSS</h5>
                    <div className="progress">
                      <div className="prigress-in" style={{ width: "96%" }}></div>
                      <div className="skill-percent">96%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>JS & React</h5>
                    <div className="progress">
                      <div className="prigress-in" style={{ width: "85%" }}></div>
                      <div className="skill-percent">85%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Python & API</h5>
                    <div className="progress">
                      <div className="prigress-in" style={{ width: "75%" }}></div>
                      <div className="skill-percent">75%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>SQL & MySQL</h5>
                    <div className="progress">
                      <div className="prigress-in" style={{ width: "65%" }}></div>
                      <div className="skill-percent">65%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Experience */}
            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timline-box padd-15">
                    <div className="timline shadow-dark">
                      {/* Timeline Items */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2022 – Present
                        </h3>
                        <h4 className="timeline-title">
                        Computer Science Degree (In Progress)
                        </h4>
                        <p className="timeline-text">
                        Currently pursuing a Bachelor’s in Computer Science, gaining strong foundations in algorithms, programming, database management, and software development. Alongside my academic studies, I actively work on personal and team projects to sharpen my technical and problem-solving skills.
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> Graduated in 2021

                        </h3>
                        <h4 className="timeline-title">
                        High School Diploma

                        </h4>
                        <p className="timeline-text">
                        Completed secondary education with a strong interest in technology, mathematics, and design, which inspired me to pursue a career in computer science and web development. </p>
                      </div>
                      {/*  more timeline items  */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timline-box padd-15">
                    <div className="timline shadow-dark">
                      {/* Timeline Items */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2023 - Present
                        </h3>
                        <h4 className="timeline-title">
                        Technical Skills & Expertise
                        </h4>
                        <p className="timeline-text">
                          <ul>
                    <li><strong>  Web Development:</strong>  HTML, CSS, JavaScript, React, Bootstrap, WordPress</li> 

                    <li> <strong>Programming:</strong>  Python (with focus on backend and automation)</li> 

                    <li><strong>Databases:</strong>  MySQL, SQL</li> 

                    <li>  <strong>Design:</strong>  Photoshop, UI/UX design principles</li> 

                    <li> <strong>Other: </strong> Git/GitHub, Responsive Design, REST APIs</li> </ul>
                       </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                         
                        </h3>
                        <h4 className="timeline-title">
                        Language Proficiency
                        </h4>
                        <p className="timeline-text">
                        Passed the Duolingo English Test, demonstrating strong skills in reading, writing, listening, and speaking English for academic and professional use.
                       </p>
                      </div>
                      {/*  more timeline items */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
