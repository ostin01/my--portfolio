import "./contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4fwet6e",
        "template_lxwj55m",
        form.current,
        "pFtDAShwNacKCRm2q"
      )
      .then(
        (response) => {
          if (response.status === 200) {
            alert("message sent successfully");
          }
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="background">
      <div className="contactInput__container">
        <div data-aos="fade-right" className="contact__container" id="contact">
          <h1>Get in touch</h1>
          <div data-aos="fade-right" className="contacts__icons">
            <a href="https://github.com/ostin01" target="blank">
              <GitHubIcon />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=2348136080403"
              target="blank"
            >
              <WhatsAppIcon />
            </a>
          </div>
          <div data-aos="fade-right" className="contact__info">
            <p>+234 08136080403</p>
            <p>austinpaul606@gmail.com</p>
          </div>
          <div data-aos="fade-right" className="contact__image">
            <img src="./images/contact.svg" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" className="inputsection__container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="name">
              <h4>
                <PersonIcon />
                Name
              </h4>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="email">
              <h4>
                <AlternateEmailIcon /> Email
              </h4>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="message">
              <h4>
                <ChatBubbleOutlineIcon />
                message
              </h4>
              <textarea name="message" rows={6} required></textarea>
            </div>
            <div className="submit">
              <button type="submit">
                <SendIcon />
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
