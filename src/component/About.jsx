import { useState } from "react";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Your full about text
  const aboutText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia saepe ex velit possimus, rem, neque asperiores aliquam nostrum tenetur placeat, harum ea fugiat optio quaerat dolorum eveniet dolores nobis ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam, accusantium placeat officiis odio unde, velit hic dignissimos voluptas magni quos tempora repudiandae ipsa, nihil reiciendis.";

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
                    {/* ✅ Download CV Button */}
                    <a
                      href="/marzia afzali_CV.pdf"
                      download="Marzia_CV"
                      className="btn"
                    >
                      Download CV
                    </a>
                    <a href="#contact" className="btn hire-me">
                      Hire me
                    </a>
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
                    <h5>Python</h5>
                    <div className="progress">
                      <div className="prigress-in" style={{ width: "76%" }}></div>
                      <div className="skill-percent">75%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>SQL & MySQL</h5>
                    <div className="progress">
                      <div className="prigress-in" style={{ width: "76%" }}></div>
                      <div className="skill-percent">76%</div>
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
                          <i className="fa fa-calendar"></i> 2013 - 2015
                        </h3>
                        <h4 className="timeline-title">
                          Computer science degree in progress
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                      </div>
                      {/* You can add more timeline items here */}
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
                          <i className="fa fa-calendar"></i> 2013 - 2015
                        </h3>
                        <h4 className="timeline-title">
                          Web Development Projects
                        </h4>
                        <p className="timeline-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        </p>
                      </div>
                      {/* You can add more timeline items here */}
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
