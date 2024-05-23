import { googleLogout } from '@react-oauth/google';
import React, { useEffect, useRef, useState } from 'react'
import { GiDoctorFace, GiHamburgerMenu } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';

const Dashnav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
  
  
    const handleLogout = () => {
      googleLogout();
      // Clear the token stored in local storage
      localStorage.removeItem('googleCredentials')
      navigate('/')
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
            <h1 className="text-2xl font-bold text-accent">autoshorts.click</h1>
          </div>
          </Link>
          {/* menu */}
          {/* menu large screen */}
          <div className="hidden lg:flex justify-center items-center gap-5 font-semibold text-xl text-accent  hover:text-orange-300">
    
            <Link to="/dashboard">
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                DASHBOARD
              </button>
            </Link>
            <Link to="/dashboard/create">
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                CREATE
              </button>
            </Link>
            <Link to="/dashboard/affiliate">
                  <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg block w-full">
                    AFFILIATE
                  </button>
                </Link>

            <Link to="/dashboard/billing">
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                BILLING
              </button>
            </Link>
            <Link to="/dashboard/account">
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
              ACCOUNT
              </button>
            </Link>

            
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg" onClick={handleLogout}>
                Logout
              </button>
              
            

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
              <div className="absolute top-8 w-32 right-0 bg-primary border border-accent rounded-md shadow-md space-y-2 p-2">
                   <Link to="/dashboard" className='block'>
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                DASHBOARD
              </button>
            </Link>
            <Link to="/dashboard/create" className='block'>
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                CREATE
              </button>
            </Link>

            <Link to="/dashboard/affiliate" className='block'>
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                AFFILIATE
              </button>
            </Link>
            <Link to="/dashboard/billing" className='block'>
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
                BILLING
              </button>
            </Link>

            <Link to="/dashboard/account" className='block'>
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg">
              ACCOUNT
              </button>
            </Link>

            
              <button className="text-accent  hover:text-primary transition-all duration-300 hover:bg-gray-800 hover:px-3 hover:py-2 rounded-lg block" onClick={handleLogout}>
                LOGOUT
              </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashnav