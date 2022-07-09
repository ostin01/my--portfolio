import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
const InputSection = () => {
  return (
    <div data-aos="fade-left" className="inputsection__container">
      <form method="POST">
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
          <textarea rows={6} required></textarea>
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
