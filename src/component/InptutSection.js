import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";
import emailjs from "emailjs-com";
const InputSection = () => {
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
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div data-aos="fade-left" className="inputsection__container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name">
          <h4>
            <PersonIcon />
            Name
          </h4>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
          />
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
  );
};

export default InputSection;
