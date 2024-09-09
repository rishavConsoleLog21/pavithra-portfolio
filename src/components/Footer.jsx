import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          Developed by
          <strong className="pink-gradient_text">
            <Link target="_blank" to="https://rishavkumar.live/">
              {" "}
              Rishav Kumar
            </Link>
          </strong>
          .
        </p>
        <p>
          All rights reserved.
          © 2024 <strong className="pink-gradient_text">Pavithra CR</strong>.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
