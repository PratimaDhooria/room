import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa6";

function Footer() {

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/blog" },
    { name: "Booking Now", path: "/properties" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <address className="contact-info">
            <p>Abhay Prasad B-wing</p>
            <p>Ground floor, Indore – 452003</p>
            <p> <a herf="Email:pratimadhuriya000@gmail.com">pratimadhuriya000@gmail.com</a></p>
            <p>
              📞 <a href="tel:+91975215505">+91 97521 5505</a>
            </p>
             </address>
        </div>

        {/* SOCIAL ICONS */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/91975215505"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      <p className="footer-bottom">
        © 2025. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
