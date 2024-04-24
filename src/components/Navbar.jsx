import { useEffect, useRef, useState } from "react";
import { GiDoctorFace, GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
          <div className="flex justify-center items-center gap-3">
            <div className="text-accent text-2xl">
              <GiDoctorFace />
            </div>
            <h1 className="text-2xl font-bold text-accent">AutoShorts.ai</h1>
          </div>
          {/* menu */}
          {/* menu large screen */}
          <div className="hidden lg:flex justify-center items-center gap-5 font-semibold text-xl text-accent  hover:text-orange-300">
            {/* <Link to='#pricing'>Pricing</Link> */}
            <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">Pricing</button>
            <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">Login</button>
            <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">Sign Up</button>
          </div>
          {/* menu small screen */}
          <div className="lg:hidden relative" ref={dropdownRef}>
          <div className="text-xl text-accent border border-accent px-5 py-1 rounded-md" onClick={toggleDropdown}>
          <GiHamburgerMenu />
          </div>
          {isDropdownOpen && (
              <div className="absolute top-8 w-32 right-0 bg-primary border border-accent rounded-md shadow-md ">
                <button className="block w-full text-left px-4 py-2 text-accent hover:text-primary hover:bg-gray-800 hover:px-3 hover:py-2 rounded-md">Pricing</button>
                <button className="block w-full text-left px-4 py-2 text-accent hover:text-primary hover:bg-gray-800 hover:px-3 hover:py-2 rounded-md">Login</button>
                <button className="block w-full text-left px-4 py-2 text-accent hover:text-primary hover:bg-gray-800 hover:px-3 hover:py-2 rounded-md">Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
