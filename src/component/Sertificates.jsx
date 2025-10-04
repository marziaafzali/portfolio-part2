import web from '../assets/web.jpg';
import ce1 from '../assets/ce1.jpg';
import certi from '../assets/certi.jpg';
import c7 from '../assets/c7.jpg';
import c6 from '../assets/c6.jpg';
import c4 from '../assets/c4.jpg';
import c5 from '../assets/c5.jpg';
import c3 from '../assets/c3.jpg';
import c8 from '../assets/c8.jpg';


function Sertificates() {
  return (
    <>
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Certificates</h2>
            </div>
          </div>

          <div className="row">
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={c7} alt="Certificate 1" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={c6} alt="Certificate 2" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={c4} alt="Certificate 3" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={c5} alt="Certificate 4" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={c3} alt="Certificate 5" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={ce1} alt="Certificate 6" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={certi} alt="Certificate 7" />
                </div>
              </div>
            </div>
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={c8} alt="Certificate 7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sertificates;
