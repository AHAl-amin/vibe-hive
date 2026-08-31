import React from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import login from '../../assets/registration.json';
import logo from '../../../public/img/logo.png';

const Login = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row ">

      <div className="w-full md:w-1/2 h-64 md:h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 md:opacity-80 opacity-90">
          <Lottie
            animationData={login}
            loop={true}
            className="hidden md:block w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full md:w-1/2 min-h-[100vh]  md:h-screen relative flex items-center justify-center p-6">
        <div className="absolute top-3 left-6">
          <Link to="/" className="inline-flex items-center gap-2   cursor-pointer text-slate-600 font-bold ">
            <ArrowLeft size={18} />
            <span className="hidden sm:inline ">Back</span>
          </Link>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-xl">
          <div className="text-center w-40 mx-auto">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto mb-8 w-3/4 rounded-2xl"
            />
          </div>

          <form className="w-full backdrop-blur-sm bg-white/6 p-6 sm:p-8 rounded-2xl border border-[#FF5E13]/20 shadow-lg">
            <h2 className="text-3xl font-bold text-[#FF5E13] mb-6 text-center">Welcome back</h2>
            <div className="form-control w-full mb-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="input input-bordered w-full pl-10 bg-transparent text-slate-600 placeholder-slate-400 border-[#FF5E13]/20 focus:outline-none focus:ring-2 focus:ring-[#FF5E13]/30"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>

            <div className="form-control w-full mb-4">
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full pl-10 bg-transparent placeholder-slate-400 text-slate-600 border-[#FF5E13]/20 focus:outline-none focus:ring-2 focus:ring-[#FF5E13]/30"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>

            <div className='flex mx-auto justify-end mb-4'>
              <Link
                to="/verify"
                className='text-[#FF5E13] font-semibold cursor-pointer hover:underline text-end pt-2'>Forgot Password?</Link>
            </div>

            <div>
              <button className='w-full bg-[#FF5E13] p-3 rounded-full text-white text-base font-semibold cursor-pointer hover:bg-[#e04e0f] transition-colors'>Login</button>
            </div>

            <p className="text-center text-slate-600 mt-3">
              Don't have an account?
              <Link to="/sign_up" className="text-[#FF5E13] font-semibold ml-1 hover:underline">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
