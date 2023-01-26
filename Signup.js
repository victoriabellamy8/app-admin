import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="">
      <div className=" w-full m-auto   flex-column  justify-center items-center md:w-1/4 mt-[10rem]  md:px-0 px-2">
        <h1 className="font-bold text-4xl pb-3 font-KumbhSans">Welcome back</h1>
        <p className="pb-3 text-gray-400">
          Welcome Back! Please enter your details
        </p>
        <form action="" className="mt-3">
          <label className="font-medium text-xl" htmlFor="">
            Email
          </label>

          <input
            className="border border-gray p-3 mt-2 mb-3 w-full rounded-lg"
            type="text"
            placeholder="Enter your email"
            required
          />
          <label className="font-medium text-xl mb-2 mt-2" htmlFor="">
            Password
          </label>

          <input
            className="border border-gray p-3  mt-2 w-full rounded-lg"
            type="password"
            placeholder="●●●●●●● "
            required
          />
          <Link to="./Admin">
            <button className="w-full rounded-lg text-xl px-2 py-3 bg-[#C8EE44] mt-4 font-bold hover:bg-[#9fd12a]">
              Sign in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
