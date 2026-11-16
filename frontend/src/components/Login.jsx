
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

      <div className="w-full max-w-md bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/60">

        {/* Logo */}
        <div className="flex justify-center mb-8">
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
            className="w-full py-3 bg-[rgb(1_7_24)] hover:bg-black text-white font-semibold rounded-lg transition-all duration-2000"
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

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-8">
          © 2026 JobTracker. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default Login;