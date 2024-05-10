import { useContext, useEffect, useRef, useState } from "react";
import { GiDoctorFace, GiHamburgerMenu } from "react-icons/gi";
import { googleLogout } from '@react-oauth/google'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  // const { googleLogout } = useGoogleLogout();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { logOut, user} = useContext(AuthContext)
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };


  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);









  return (
    <div className="bg-primary border-b-2 border-accent ">
      <div className="max-w-6xl mx-auto py-4 px-5">
        {/* container div */}
        <div className="flex justify-between items-center">
          {/* logo and name */}
          <Link to='/'>
          <div className="flex justify-center items-center gap-3">
            <div className="text-accent text-2xl">
              <GiDoctorFace />
            </div>
            <h1 className="text-2xl font-bold text-accent">AutoShorts.ai</h1>
          </div>
          </Link>
          {/* menu */}
          {/* menu large screen */}
          <div className="hidden lg:flex justify-center items-center gap-5 font-semibold text-xl text-accent  hover:text-orange-300">
        
            <Link to="#pricing">
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                Pricing
              </button>
            </Link>

            <Link to="/login">
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                Login
              </button>
            </Link>

            <Link to="register">
              {" "}
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                Sign Up
              </button>
              <button onClick={logOut}>Logout</button>
            </Link>

          </div>
          {/* menu small screen */}
          <div className="lg:hidden relative" ref={dropdownRef}>
            <div
              className="text-xl text-accent border border-accent px-5 py-1 rounded-md"
              onClick={toggleDropdown}
            >
              <GiHamburgerMenu />
            </div>
            {isDropdownOpen && (
              <div className="absolute top-8 w-32 right-0 bg-primary border border-accent rounded-md shadow-md ">
                <Link to="#pricing">
                  <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                    Pricing
                  </button>
                </Link>

                <Link to="/login">
                  <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                    Login
                  </button>
                </Link>

                <Link to="register">
                  {" "}
                  <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                    Sign Up
                  </button>
                </Link>
                <button onClick={logOut}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
