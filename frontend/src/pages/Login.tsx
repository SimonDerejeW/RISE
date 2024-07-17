import React from "react";
import img from "../assets/authpic.jpg";
import logo from "../assets/rise-black.png";
import TextInput from "../components/TextInput";
const Login = () => {
  return (
    <div className="h-screen bg-[#CED9FF] flex flex-row">
      <div className="w-[40%] object-contain overflow-hidden m-6">
        <img src={img} alt="" className="rounded-2xl object-contain" />
      </div>
      <div className="w-1/2 flex flex-col my-10">
        <div className="flex justify-center items-center">
          <img src={logo} alt="" className="w-40" />
        </div>
        <div className="mt-16 flex flex-col items-center justify-center">
          <h1 className="text-[50px] font-bold mb-4 font-playfair">
            Welcome Back
          </h1>
          <p className="font-playfair w-96 text-center">
            Enter your username and password to fully access our platform
          </p>
          <div className="mt-12 flex flex-col w-full px-36">
            <TextInput text="Username" />

            <TextInput text="Password" />

            <div className="w-full px-4">
              <button className="mt-7 bg-[#004FFF] text-white p-2 rounded-lg w-full">
                Sign In
              </button>
            </div>
          </div>
          <p className="mt-12 font-playfair font-semibold">
            Don't have an account?{" "}
            <span className="text-[#004FFF] font-playfair">Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
