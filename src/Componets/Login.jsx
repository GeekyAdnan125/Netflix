import React, { useState } from 'react';
import Header from './header';

function Login() {
  const [signup,setSignup] = useState(false);
  return (
    <div className="relative min-h-screen bg-black">
      
      <Header />
      <div className="relative">
        <img 
          className="w-full h-[100vh] object-cover" 
          src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg" 
          alt="Background" 
        />
      </div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[90%] max-w-[400px] bg-[#0B0D0E]/80 py-16 px-12 rounded-lg shadow-lg">
        <h1 className="text-3xl text-white font-bold mb-6">{signup ? <span>Sign Up</span>  : <span>Sign In</span>}</h1>
        <form  onClick={(e)=>e.preventDefault()} className="flex flex-col space-y-4">
          {signup && <input 
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400" 
            type="text" 
            placeholder="Enter your user name " 
            aria-label="name"
          />}
          <input 
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400" 
            type="email" 
            placeholder="Enter your email address" 
            aria-label="Email address"
          />
 
          <input 
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400" 
            type="password" 
            placeholder="Enter your password" 
            aria-label="Password"
          />
 
          <div className="flex flex-col items-center space-y-3">
          <button 
              className="p-3 rounded-md bg-red-500 w-full text-white font-semibold hover:bg-red-600 transition" 
              type="submit"
            >
              {signup ? <span>Sign Up</span>  : <span>Sign In</span>}
            </button>

             {!signup && <p className="text-gray-400">OR</p>} 

            <button 
              className="p-3 rounded-md bg-[#282828] w-full text-white font-semibold " 
              type="button"
            >
              {signup ? <span>Use a Sign-Up Code</span>  : <span>Use a Sign-In Code</span>}  
            </button>

             {!signup && <button 
              className="text-sm text-red-400 hover:underline transition"
              type="button"
            >
              Forgot Password?
            </button>}
            <p 
            onClick={()=>setSignup(!signup)} 
            className=' pointer:cur text-white font-semibold hover:underline transition'> {!signup ? <span>are you new to Netflix Sign Up Now !!</span> : <span> already registered ? Sign In now </span>}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

