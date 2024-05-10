import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    
  const navigate = useNavigate()
    // const location = useLocation()
    const { googleSignIn} = useContext(AuthContext)
 


    const handleGoogleSignIn = () => {
      googleSignIn()
        .then(result => {
          console.log(result);
          if (result.user.email) {
            // Save user data to local storage
            localStorage.setItem('user', JSON.stringify(result.user));
    
            navigate('/dashboard');
          }
        })
        .catch(error => {
          if (error) {
            console.log(`Error in google login ${error}`);
          }
        });
    };
    

  return (
   <div>
    {/* <Navbar/> */}
    <div className='bg-white flex justify-center items-center'>
        <div className='h-[300px] bg-primary rounded-lg p-10 mt-20'>
                <h1 className='text-white text-3xl text-center font-semibold'>Register</h1>
                <div className='flex justify-center items-center pt-10'>
                <button className='bg-white text-black rounded-lg px-5 py-2 font-semibold' onClick={handleGoogleSignIn}>Sign in with Google</button>
                </div>
                <div className='flex justify-center items-center gap-1 pt-4 text-white'>
                <p>Already have account.</p>
                <Link to='/login' className='underline'>Login</Link>
                </div>
        </div>

    </div>
   </div>
  );
};

export default Register;
