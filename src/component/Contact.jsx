import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function Contact() {
  //  State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  //  State for errors, modal, and sending status
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);

  //  Load saved form data from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("contactForm"));
    if (saved) setFormData(saved);
  }, []);

  //  Auto-save form data to localStorage
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  //  Handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  //  Debounced email validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [formData.email]);

  //  Handle form submission (with EmailJS)
  async function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setShowModal(true);
      setSending(false);

      // reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      localStorage.removeItem("contactForm");

      // auto-close modal
      setTimeout(() => setShowModal(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSending(false);
      alert("⚠️ Failed to send message. Please try again later.");
    }
  }

  return (
    <section className="contact section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>

        <h3 className="contact-title padd-15">Have You Any Question?</h3>
        <h4 className="contact-subtitle padd-15">I'm At Your Service</h4>

        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-phone"></i></div>
            <h4>Call Me On</h4>
            <p>+93 7485849424</p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon"><a href="https://www.linkedin.com/in/marzia-afzali-a613a039a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
              </a></div>
            <h4>LinkedIn</h4>
            <p>
              
                linkedin.com
             
            </p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon"><i className="fa fa-envelope"></i></div>
            <h4>Email</h4>
            <p>afzalimarzia2004@gmail.com</p>
          </div>

          <div className="contact-info-item padd-15">
            <div className="icon">  <a
                //href="https://github.com/marziaafzali"
                target="_blank"
                rel="noreferrer"
              >
              <i className="fab fa-github"></i></a></div>
            <h4>GitHub</h4>
            <p>
             
                github.com/marziaafzali
            
            </p>
          </div>
        </div>

        <h3 className="contact-title padd-15">Send Me A Message</h3>
        <h4 className="contact-subtitle padd-15">
          I'm very responsive to messages
        </h4>

        {/* ✅ Contact Form */}
        <form className="contact-form padd-15" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-item col-6 padd-15">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-item col-6 padd-15">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="row">
            <div className="form-item col-12 padd-15">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-item col-12 padd-15">
              <textarea
                name="message"
                className="form-control"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
          </div>

          <div className="row">
            <div className="form-item col-12 padd-15">
              <button type="submit" className="btn" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>

        {/* ✅ Live Preview */}
        <div className="preview padd-15">
          <h4>Live Preview:</h4>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>

        {/* ✅ Confirmation Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>✅ Thank you, {formData.name || "Marzia"}!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
