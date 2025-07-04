import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerLogo from "../../assets/images/Logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left - Logo + copyright */}
        <div>
          <img src={footerLogo} alt="Inlocon Logo" className="mb-4 w-28" />
          <p className="text-sm mb-2">Copyright © 2020 Landify UI Kit.</p>
          <p className="text-sm mb-4">All rights reserved</p>
          <div className="flex gap-4 text-white text-lg">
            <FontAwesomeIcon icon={faInstagram} className="hover:text-primary-light" />
            <FontAwesomeIcon icon={faFacebookF} className="hover:text-primary-light" />
            <FontAwesomeIcon icon={faTwitter} className="hover:text-primary-light" />
            <FontAwesomeIcon icon={faYoutube} className="hover:text-primary-light" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Stay Up to Date */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay up to date</h3>
          <div className="flex items-center bg-white text-gray-800 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 text-sm focus:outline-none"
            />
            <button className="px-3 text-primary hover:text-primary-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
