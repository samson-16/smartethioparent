import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0052B4] text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center mt-4 md:mt-0">
          {[
            { name: "About", link: "/src/About.jsx" },
            "Contact",
            "Support Center",
            "Community",
            "Privacy Policy",
            "Terms of Service",
          ].map((item, index, array) => (
            <span key={index} className="mr-4">
              {typeof item === "object" ? (
                <Link to={item.link} className="hover:text-gray-400">
                  {item.name}
                </Link>
              ) : (
                <a href="#" className="hover:text-gray-400">
                  {item}
                </a>
              )}
              {index !== array.length - 1 && <span className="ml-4">•</span>}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center mt-8">
          <div className="mr-2">
            <FaCopyright />
          </div>
          <div>2024 SmartEthios. All rights reserved.</div>
          <div className="flex ml-8">
            {[
              { icon: FaFacebook, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaTiktok, link: "#" },
              { icon: FaTwitter, link: "#" },
              { icon: FaYoutube, link: "#" },
            ].map((social, index) => (
              <a key={index} href={social.link} className="mr-6">
                <social.icon className="hover:text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
