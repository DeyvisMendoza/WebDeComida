import {
  FaFacebookF,
  FaInstagram,
  FaRegClock,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { Link } from "react-router-dom";
import imagen from "../../assets/NavBar/fastfood.svg";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header>
      <nav className="top-nav">
        <div className="top-nav-container">
          <div className="contact-info">
            <FaRegClock color="white" size={20} aria-hidden="true" />
            <p> Working hours: Mon-Sat 8.00-18.00</p>
          </div>
          <div className="contact-info">
            <IoMdPhonePortrait color="white" size={20} aria-hidden="true" />
            <p> Call us: +1 234 567 890</p>
          </div>
        </div>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF color="white" size={15} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color="white" size={15} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color="white" size={15} />
          </a>
          <a href="/search" aria-label="Search">
            <FaSearch color="white" size={15} />
          </a>
        </div>
      </nav>

      <nav className="main-nav">
        <img className="logo" src={imagen} alt="Logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">PAGES</Link>
          </li>
          <li>
            <Link to="/offers">OUR OFFER</Link>
          </li>
          <li>
            <Link to="/galleries">GALLERIES</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
