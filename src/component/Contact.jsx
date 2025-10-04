

function contact() {
  return (
    <>
  
  <section className="contact section">
    <div className="container">
        <div className="row">
            <div className="section-title padd-15">
                <h2>Contact Me</h2>
            </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Question?</h3>
        <h4 className="contact-subtitle padd-15">I'M At Your Services</h4>
        <div className="row">
            <div className="contact-info-item padd-15 ">
                <div className="icon"><i className="fa fa-phone"></i></div>
                <h4>Call Us On</h4>
                <p>+93 7485849424</p>
            </div>
             <div className="contact-info-item padd-15 ">
                <div className="icon"> <i className="fab fa-linkedin" ></i></div>
                <h4>Linkdin</h4>
                <p>https://linkedin.com</p>
            </div>
             <div className="contact-info-item padd-15">
                <div className="icon"><i className="fa fa-envelope"></i></div>
                <h4>Email</h4>
                <p>afzalimarzia2004@gmail.com</p>
            </div>

             <div className="contact-info-item padd-15">
                <div className="icon"><i className="fab fa-github"></i></div>
                <h4>Github</h4>
                <p><a>https://github.com/marziaafzali</a></p>
            </div> 

        </div>
        <h3 className="contact-title padd-15">EDND ME AN EMAIL</h3>
        <h4 className="contact-subtitle padd-15">I'M VERY RESPONSIVE TO MESSAGE</h4>
        <div className="row">
          <div className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name"/>
                </div>
              </div>
               <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input type="Email" className="form-control" placeholder="Email"/>
                </div>
              </div>
              </div>
              <div className="row">
               <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject"/>
                </div>
              </div>
              </div>
             <div className="row">
               <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea type="text" className="form-control" placeholder="Messsage"/>
                </div>
              </div>
              </div>
              <div className="row">
               <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
              </div>
            
          </div>
        </div>
    </div>
  </section>
     
    </>
  )
}

export default contact 