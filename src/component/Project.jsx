import project1 from'../assets/project1.jpg';
import project2 from'../assets/project2.jpg';
import project7 from'../assets/project7.jpg';
import project5 from'../assets/project5.jpg';
import project3 from'../assets/project3.jpg';
import project4 from'../assets/project4.jpg';


function Project() {
  return (
    <>
   <section className="portfolio section">
    <div  className="container">
        <div className="row">
            <div className="section-title" padd-15>
                <h2>Projects</h2>
            </div>
        </div>
        <div className="row">
            <div className="portfolio-heading padd-15">
            <h2>My Last Projects:</h2>
            </div>
        </div>
        <div className="row">

            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={project7} alt="" />
                    </div>
                    <h4>Translation App</h4>
                   <p>This Translation App is built with React and powered by OpenAI, designed to provide fast and accurate text translations across multiple languages. It features a clean, responsive interface and demonstrates my skills in React development, API integration, and creating user-friendly web applications. </p>          <center> <a href="https://openai-translationapp.vercel.app/" className="btn hire-me">
                 Link
                </a></center>
                </div>
            </div>
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={project1} alt="" />
                    </div>
                    <h4>Freelance Invoice App</h4>
              <p>The Freelance Invoice App is a simple and efficient tool designed to help freelancers create, manage, and track invoices with ease. Built with modern web technologies, it features a clean interface for generating invoices, organizing client details, and keeping records, showcasing my skills in building practical, user-focused applications.</p>
              <center> <a href="	
https://marziaafzali.github.io/A-Freelance-Invoice-Client-Manager-App/" className="btn hire-me">
                 Link
                </a></center>
                </div>
            </div>
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={project4} alt="" />
                    </div>
                    <h4> Restaurant Website </h4>
              <p>This Restaurant Website is a fully responsive design built using HTML, CSS, and JavaScript, created to showcase a modern dining experience online. It includes engaging layouts for menus, reservations, and contact details, demonstrating my ability to design visually appealing and user-friendly static websites.</p>
              <center> <a href="#Contact" className="btn hire-me">
                 Link
                </a></center>
                </div>
            </div>
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={project5} alt="" />
                    </div>
                    <h4>BookBloom</h4>
              <p>BookBloom is a modern website designed to provide users with a simple and engaging way to explore books online. Built with a focus on clean design and smooth navigation, it highlights my skills in front-end development and creating user-centered digital experiences.</p>
              <center> <a href="https://marziaafzali.github.io/bookbloom/" className="btn hire-me">
                 Link
                </a></center>
                </div>
            </div>
           
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={project3} alt="" />
                    </div>
                    <h4> Personal Webpage</h4>
              <p>This Personal Webpage is a portfolio site designed and developed to showcase my skills, projects, and achievements. Built with modern web technologies, it features a clean responsive layout, easy navigation, and a professional design that reflects my identity as a computer science student and aspiring developer.</p>
              <center> <a href="https://marziaafzali.github.io/School-Portal/profile.html" className="btn hire-me">
                 Link
                </a></center>
                </div>
            </div>
            <div className="portfolio-item padd-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                        <img src={project2} alt="" />
                    </div>
                    <h4> Movie Theater project </h4>
              <p>The Movie Theater project is a dynamic web application designed to display movies, showtimes, and ticket booking options in a user-friendly interface. It focuses on delivering an engaging browsing experience with interactive features, clean design, and responsive layouts, making it easy for users to explore and enjoy cinematic content.</p>
              <center> <a href="https://marziaafzali.github.io/movie-theater-/" className="btn hire-me">
                 Link
                </a></center>
             
                </div>
            </div>
        </div>
    </div>
   </section>
     
    </>
  )
}

export default Project 