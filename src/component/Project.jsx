import { useState } from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project7 from "../assets/project7.jpg";

function Project() {
  // ✅ Define all projects in an array
  const projects = [
    {
      id: 1,
      title: "Translation App",
      img: project7,
      link: "https://openai-translationapp.vercel.app/",
      desc:
        "Built with React and OpenAI API to translate text between multiple languages. Demonstrates React development and API integration.",
      tech: ["React", "API"],
    },
    {
      id: 2,
      title: "Freelance Invoice App",
      img: project1,
      link: "https://marziaafzali.github.io/A-Freelance-Invoice-Client-Manager-App/",
      desc:
        "A web app for freelancers to create and manage invoices easily. Showcases form handling, JS logic, and localStorage usage.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "Restaurant Website",
      img: project4,
      link: "#Contact",
      desc:
        "A fully responsive restaurant website made with HTML, CSS, and JS — includes modern layout and engaging animations.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      id: 4,
      title: "BookBloom",
      img: project5,
      link: "https://marziaafzali.github.io/bookbloom/",
      desc:
        "A clean, responsive book discovery website built with modern front-end tools, focusing on UX and accessibility.",
      tech: ["HTML", "CSS", "Bootstrap"],
    },
    {
      id: 5,
      title: "Personal Webpage",
      img: project3,
      link: "https://marziaafzali.github.io/School-Portal/profile.html",
      desc:
        "A personal portfolio webpage to showcase my projects and skills. Built with responsive design principles.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 6,
      title: "Movie Theater Project",
      img: project2,
      link: "https://marziaafzali.github.io/movie-theater-/",
      desc:
        "Dynamic web app showing movie listings and ticket options. Focused on responsive layouts and interactivity.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  // ✅ Filter state
  const [filter, setFilter] = useState("All");

  // ✅ Filtered projects
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  // ✅ All available categories
  const categories = [
    "All",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "WordPress",
    "API",
  ];

  return (
    <section className="portfolio section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Projects</h2>
          </div>
        </div>

        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Latest Projects:</h2>
          </div>
        </div>

        {/* ✅ Filter Buttons */}
        <div className="filter-buttons padd-15" style={{ textAlign: "center", marginBottom: "20px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ Projects Grid */}
        <div className="row">
          {filteredProjects.map((proj) => (
            <div className="portfolio-item padd-15" key={proj.id}>
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={proj.img} alt={proj.title} />
                </div>
                <h4>{proj.title}</h4>
                <p>{proj.desc}</p>
                <center>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="btn hire-me">
                    Link
                  </a>
                </center>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Simple styling for active filter 
      <style>{`
        .filter-btn {
          background-color: var(--bg-color);
          color: var(--text-color);
          border: 1px solid var(--border-color);
          padding: 8px 16px;
          margin: 5px;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }
        .filter-btn:hover {
          background-color: var(--primary-color);
          color: #fff;
        }
        .filter-btn.active {
          background-color: var(--primary-color);
          color: #fff;
          border-color: var(--primary-color);
        }
    `}</style>*/}
    </section>
  );
}

export default Project;
