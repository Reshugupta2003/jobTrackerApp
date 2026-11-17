
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Input, Button } from './index';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import authService from '../../Backend_Connection/auth';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");

    try {
      const session = await authService.login({
        email: data.email,
        password: data.password
      });

      if (session) {
        const userData = await authService.getCurrentUser();
        dispatch(authLogin({ userData }));
        navigate("/");
      }
    } catch (error) {
      setError("Login failed - " + error.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-2xl shadow-slate-300/50">

        {/* Logo  mb-8 -> maintan spacing between company with bottom content collision*/}
        <div className="text-center mb-8">
          <span className="text-3xl font-extrabold tracking-tight text-blue-700">
            Job<span className="text-slate-900">Tracker</span>
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Welcome Back!
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Sign in to manage and track your job applications.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-5 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit(login)} className="space-y-5">

          <Input
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            className="py-3"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address"
              }
            })}
          />

          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            className="py-3"
            {...register("password", {
              required: "Password is required"
            })}
          />

          <Button
            type="submit"
            className="w-full py-3 bg-slate-900 hover:bg-black text-white font-semibold rounded-lg transition-all duration-500"
           >
            Sign In
          </Button>
        </form>

        {/* Signup Link */}
        <div className="mt-7">
        <div className="flex justify-between items-center text-sm">

        <Link
         to="/forgot-password"
         className="font-semibold text-slate-700 hover:text-black hover:underline transition-all"
        >
         Forgot Password
        </Link>

        <Link
         to="/signup"
         className="font-semibold text-slate-700 hover:text-black hover:underline transition-all"
        >
        Sign-up
        </Link>

        </div>
       </div>
    
    {/* Build it later after backend Set-up */}

       {/* <div className = "flex justify-between m-1">
         <div>Google</div>
         <div>Linkedin</div>
         <div>Github</div>
       </div> */}

       {/* Footer */}
       <p className="text-center text-xs text-slate-400 mt-8">
        © 2026 JobTracker. All rights reserved.
       </p>

      </div>
    </div>
  );
}

export default Login;

{/*
  1. min-h-screen: min-height: 100vh, max-w-md: maximum width medium
  2. sm:p-10 : padding 10, if screen size larger then sm(640 px)
  3. shadow-slate-300/50 :slate-colored box shadow -> slate-200 with  60% (0.6) opacity.
  4. tracking-widest : letter-spacing(tracking) for example - tracking-wide: 0.025em(slightly space),tracking-tighter: -0.05em (very close)
  5. observe tailwind have 3 option op1-op2-op3: example - bg-gray-500, border-blue-300, etc
*/}