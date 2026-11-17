
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button } from "./index";
import { login } from "../store/authSlice"; // Adjust path if needed
import authService from "../../Backend_Connection/auth";

export default function Signup() {
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting},
  } = useForm();

  const create = async (data) => {
    setError("");

    try {
      // Create new account
      const account = await authService.createAccount(data);

      if (account) {
        // Get logged-in user details
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(login({ userData }));
          navigate("/");
        } else {
          setError("Account created, but unable to fetch user details.");
        }
      }
    } catch (error) {
      setError(error.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-700 px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl p-7 sm:p-10 border border-slate-200 shadow-xl">

        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-3xl font-extrabold tracking-tight text-blue-700">
            Job<span className="text-slate-900">Tracker</span>
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Create Your Account
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Start managing and tracking your job applications.
          </p>
        </div>

        {/* Backend Error */}
        {error && (
          <div
            role="alert"
            className="mb-5 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm"
          >
            {error}
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit(create)} className="space-y-5">

          {/* Username */}
          <div>
            <Input
              label="Username"
              placeholder="Enter your username"
              type="text"
              autoComplete="username"
              className="py-3"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username must not exceed 20 characters",
                },
                validate: {
                  noSpaces: (value) =>
                    !/\s/.test(value) ||
                    "Username cannot contain spaces",

                  startsWithLetter: (value) =>
                    /^[a-zA-Z]/.test(value) ||
                    "Username must start with a letter",

                  validChars: (value) =>
                    /^[a-zA-Z0-9_]+$/.test(value) ||
                    "Only letters, numbers and underscores are allowed",
                },
              })}
            />

            {errors.username && (
              <p className="text-red-500 text-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Input
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              autoComplete="email"
              className="py-3"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              autoComplete="new-password"
              className="py-3"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Use at least 8 characters with uppercase, lowercase, number and special character.",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-3 bg-slate-900 hover:bg-black text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>

        </form>

        {/* Login Link */}
        <div className="mt-7 text-center text-sm">
          <span className="text-slate-500">
            Already have an account?{" "}
          </span>

          <Link
            to="/login"
            className="font-semibold text-slate-800 hover:text-black hover:underline transition-all"
          >
            Sign in
          </Link>
        </div>

      </div>
    </div>
  );
}
{/*
    1. formState : isSubmitting -> true while the handleSubmit callback is executing.
       errors -> contains validation error messages and types for each invalid field.
    */}