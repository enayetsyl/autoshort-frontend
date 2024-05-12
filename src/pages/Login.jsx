import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  console.log('backend', import.meta.env.VITE_BACKEND)
  // const location = useLocation();
  // console.log(location, location.state)

  const { googleSignIn, setLoading } = useContext(AuthContext);

 

  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn()
      .then((result) => {
        console.log(result);
        if (result.user.email) {
          // Set user data in local storage
          localStorage.setItem('user', JSON.stringify(result.user));
          navigate('/dashboard')
          // navigate(location?.state ? location.state : "/dashboard");
          setLoading(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        if (error) {
          console.log(`Error in google login ${error}`);
          setLoading(false);
        }
      });
  };
  

  return (
    <div>
      {/* <Navbar/> */}
      <div className="bg-white flex justify-center items-center">
        <div className="h-[300px] bg-primary rounded-lg p-10 mt-20">
          <h1 className="text-white text-3xl text-center font-semibold">
            Login
          </h1>
          <div className="flex justify-center items-center pt-10">
            <button
              className="bg-white text-black rounded-lg px-5 py-2 font-semibold"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>
          </div>
          <div className="flex justify-center items-center gap-1 pt-4 text-white">
            <p>Not registered yet.</p>
            <Link to="/register" className="underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
