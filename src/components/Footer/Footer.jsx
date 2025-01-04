import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white py-10 ">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
          <Logo/>
          {/* Column 1 */}
          <div>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/team"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/mission"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/tech"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/category/lifestyle"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  to="/category/health"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Health
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-center m-auto ">Follow Us</h2>
            <div className="flex  flex-col gap-2">
              <Link
                to="https://twitter.com"
                className="text-gray-400 hover:text-blue-500 transition duration-300 text-xl"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link
                to="https://facebook.com"
                className="text-gray-400 hover:text-blue-600 transition duration-300 text-xl"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link
                to="https://instagram.com"
                className="text-gray-400 hover:text-pink-500 transition duration-300 text-xl"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} goBlogging. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
