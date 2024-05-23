import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GiDoctorFace } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link to="/">
            <div className="flex justify-center items-center gap-3">
              <div className="text-accent text-2xl">
                <GiDoctorFace />
              </div>
              <h1 className="text-2xl font-bold text-accent">autoshorts.click</h1>
            </div>
          </Link>

          <div className="hidden lg:flex justify-center items-center gap-5 font-semibold text-xl text-accent  hover:text-orange-300">
            <Link to="#pricing">
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                Terms and Conditions
              </button>
            </Link>
            <Link to="#pricing">
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                Privacy Policy
              </button>
            </Link>
            <Link to="#pricing">
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-10 items-center text-3xl cursor-pointer">
           <FaFacebookF />
 <FaYoutube/>
 <FaInstagramSquare/>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
