import React from 'react';
import '../assets/css/homepage.css';

export default function Footer() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="ml-auto col-lg-5 col-md-6 col-12 contact-info">
            <h2 className="mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">
              Обръщение Към Нас
            </h2>

            <form action="#" method="post" className="contact-form webform" data-aos="fade-up" data-aos-delay="400" role="form">
              <input type="text" className="" name="cf-name" placeholder="Име" />

              <input type="email" className="" name="cf-email" placeholder="Имейл" />

              <textarea className="" rows="5" name="cf-message" placeholder="Съобщение" />

              <button type="submit" className="" id="submit-button" name="submit">
                Изпратете Съобщение
              </button>
            </form>
          </div>

          <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12 contact-map">
            <h2 className="mb-4" data-aos="fade-up" data-aos-delay="600">
              Where you can <span>find us</span>
            </h2>

            <p data-aos="fade-up" data-aos-delay="800">
              <i className="fa fa-map-marker mr-1"></i> София, България
            </p>
            <div className="google-map" data-aos="fade-up" data-aos-delay="900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.6015792916896!2d27.7059312!3d42.3936333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6c97980e76469%3A0x817d0caca54c1e00!2sEXE%20Beach%20Bar!5e0!3m2!1sbg!2sbg!4v1716027437871!5m2!1sbg!2sbg"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
