import React from 'react';
import './Contact.css'; // custom styles

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container">
        <div className="contact__left">
          <h2 className="section__title-2">
            <span>Contact <span className="highlight">Me.</span></span>
          </h2>

          <p className="contact__description-1">
            I will read all emails. Send me any message you want and I'll get back to you.
          </p>

          <p className="contact__description-2">
            I need your <b>Name</b> and <b>Email Address</b>, but you won't receive anything other than your reply.
          </p>

          <div className="geometric-box" />

          <div className="contact__social">
            <img src="assets/img/curved-arrow.svg" alt="arrow" className="contact__social-arrow" />
            <div>
              <p className="contact__social-description-1">Does not send emails</p>
              <p className="contact__social-description-2">Write me on my social networks</p>
            </div>
            <div className="contact__social-links">
              <a href="https://www.linkedin.com/in/kameshwar-chankapure/" target="_blank" rel="noreferrer">
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a href="https://t.me/kameshwar_ch" target="_blank" rel="noreferrer">
                <i className="ri-telegram-fill"></i>
              </a>
              <a href="https://stackoverflow.com/users/20695706/chankapure-kameshwar" target="_blank" rel="noreferrer">
                <i className="ri-stack-overflow-line"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__right">
          <h2 className="contact__title">Send Me A Message</h2>
          <form className="contact__form" id="contact-form">
            <div className="contact__group">
              <input type="text" name="user_name" placeholder="First Name" required />
              <input type="email" name="user_email" placeholder="Email Address" required />
            </div>
            <input type="text" name="user_subject" placeholder="Subject" required />
            <textarea name="user_message" placeholder="Message" required></textarea>
            <button type="submit" className="contact__button">
              <i className="ri-send-plane-line"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
