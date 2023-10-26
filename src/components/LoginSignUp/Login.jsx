import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-4xl font-bold text-center  uppercase">
          Welcome <span className="text-[var(--color-purple)]">Back!</span>
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Eg: something@gmail.com"
              title="Enter your email"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="***********"
            />
          </div>
          <a
            href="#"
            className="text-base text-[var(--color-purple)] underline"
          >
            Forgot Password?
          </a>
          <div className="mt-4">
            <label>
              <input type="checkbox" className="mr-2 accent-slate-50 " />
              Remember Me
            </label>
          </div>

          <div className="mt-6  ">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform uibg rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>

        {/* Authentication with google  */}
        <div className="flex items-center justify-center mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-[rgb(126,58,242)] rounded-md font-semibold
       hover:bg-[#7E3AF2] hover:text-white "
          >
            Sign In With Google
          </button>
        </div>

        <p className="mt-8 text-xl font-semibold text-center text-gray-700">
          {" "}
          Not a member yet?{" "}
          <a
            href="#"
            className="font-medium text-[var(--color-purple)] hover:underline"
          >
            <NavLink to="/Signup">
              <h1>SignUp</h1>
            </NavLink>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
