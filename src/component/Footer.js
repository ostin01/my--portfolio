import "./contact.css";
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="footer">
      <p>copyright © Lawal Austin, {year}</p>
    </div>
  );
};

export default Footer;
