import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="sectionTitle">Get in touch</h2>
      <span className="sectionSubtitle">Contact me</span>

      <div className="contactContainer container grid">
        <div className="contactContent">
          <h3 className="contactTitle">Talk to me</h3>

          <div className="contactInfo">
            <div className="contactCard">
              <i className="bx bx-mail-send contactCardIcon"></i>

              <h3 className="contactCardTitle">Email</h3>
              <span className="contactCardData">shirshodipto@gmail.com</span>

              <a href="shirshodipto@gmail.com" className="contactButton">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contactButtonIcon"></i>
              </a>
            </div>

            <div className="contactCard">
              <i className="bx bxl-whatsapp contactCardIcon"></i>

              <h3 className="contatcCardTitle">Whatsapp</h3>
              <span className="contactCardData">+881704418483</span>

              <a href="www.whatsapp.com" className="contactButton">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contactButtonIcon"></i>
              </a>
            </div>

            <div className="contactCard">
              <i className="bx bxl-messenger contactCardIcon"></i>

              <h3 className="contatcCardTitle">Messenger</h3>
              <span className="contactCardData">user.fb123</span>

              <a href="" className="contactButton">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contactButtonIcon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contactContent">
          <h3 className="contactTitle">Write me your project</h3>

          <form ref={form} className="contactForm" onSubmit={sendEmail}>
            <div className="contactFormDiv">
              <label className="contactFormTag">Name</label>
              <input
                type="text"
                name="name"
                className="contactFormInput"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="contactFormDiv">
              <label className="contactFormTag">Mail</label>
              <input
                type="email"
                name="email"
                className="contactFormInput"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="contactFormDiv contactFormArea">
              <label className="contactFormTag">Project</label>
              <textarea
                name="project"
                className="contactFormInput"
                placeholder="Write your project"
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>

            <button href="#contact" className="button buttonFlex">
              Send Message
              <svg
                class="buttonIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
