import React, { useState } from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import registration from '../../assets/registration.json'
import logo from '../../../public/img/logo.png';

const Registration = () => {
  const [countryCode, setCountryCode] = useState('+1');

  const countryCodes = [
    { code: '+1', flag: '🇺🇸', name: 'United States' },
    { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+91', flag: '🇮🇳', name: 'India' },
    { code: '+33', flag: '🇫🇷', name: 'France' },
    { code: '+61', flag: '🇦🇺', name: 'Australia' },
  ];

  return (
    <div className="scroll-auto bg-gray-100 flex flex-col md:flex-row ">
      <div className="w-full  md:block hidden md:w-1/2 h-64 md:h-screen relative flex items-center justify-center">
        <div className="absolute">
          <Lottie
            animationData={registration}
            loop={true}
            className="hidden md:block w-full h-full object-cover" />
        </div>
        <div className="relative z-10 hidden md:block w-full h-full" />
      </div>

      <div className="w-full md:w-1/2 min-h-[100vh] md:h-screen relative flex items-center justify-center p-6">
        <div className="absolute top-6 left-6">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-600 font-bold">
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back</span>
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

          <form className="w-full space-y-6 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#FF5E13]/20 shadow-lg">
            <h2 className="text-3xl font-bold text-[#FF5E13] mb-4 text-center">Create your account</h2>

            <div className="form-control w-full">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="input input-bordered w-full pl-10 bg-transparent text-slate-600 placeholder-slate-400 border-[#FF5E13]/20 focus:outline-none focus:ring-2 focus:ring-[#FF5E13]/30"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
              </div>
            </div>

            <div className="form-control w-full">
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password (min. 8 characters)"
                  className="input input-bordered w-full pl-10 bg-transparent placeholder-slate-400 text-slate-600 border-[#FF5E13]/20 focus:outline-none focus:ring-2 focus:ring-[#FF5E13]/30"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate- 600" size={18} />
              </div>
            </div>

            <div className="form-control w-full">
              <div className="relative flex items-center">
                <div className="flex items-center bg-white/6 border border-[#FF5E13]/20 rounded-l-lg h-12 px-3 text-slate-600">
                  <span className="mr-2">
                    {countryCodes.find((c) => c.code === countryCode)?.flag}
                  </span>
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-transparent  focus:outline-none text-slate-600 placeholder-slate-400 text-sm"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code} className="text-black">
                        {country.code}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  className="input input-bordered w-full h-12 bg-transparent text-slate-600 placeholder-slate-400 rounded-l-none border-l-0 border-[#FF5E13]/20 focus:outline-none focus:ring-2 focus:ring-[#FF5E13]/30"
                />
              </div>
            </div>

            <button className="w-full bg-[#FF5E13] hover:bg-[#e04e0f] transition-colors text-white rounded-full py-3 font-semibold">Create account</button>

            <p className="text-center text-slate-600">
              Already have an account?
              <Link to="/login" className="text-[#FF5E13] font-semibold ml-1 hover:underline">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
