import React from "react";
import img from "../assets/authpic.jpg";
import logo from "../assets/rise-black.png";
import refugee from '../assets/refugee.png'
import volunteer from '../assets/volunteer.png'
import ngo from '../assets/ngo.png'
import TextInput from "../components/TextInput";
import Role from "../components/Role";
const Signup = () => {
  return (
    <div className="h-screen bg-[#CED9FF] flex flex-row-reverse">
      <div className="w-[40%] object-contain overflow-hidden m-6">
        <img src={img} alt="" className="rounded-2xl object-contain" />
      </div>
      <div className="w-1/2 flex flex-col my-5">
        <div className="flex justify-center items-center">
          <img src={logo} alt="" className="w-28" />
        </div>
        <div className="mt-6 flex flex-col items-center justify-center">
          <h1 className="text-[30px] font-bold mb-4 font-playfair">
            Get Started with Us
          </h1>
          <p className="font-playfair w-96 text-center">
          Complete these easy steps to register with our platform
          </p>
          <div className="mt-8 flex flex-col w-full px-36">
            <TextInput text="Username" />
            <TextInput text="Email"/>

            <TextInput text="Password" />
            <p className="font-playfair font-bold mb-3">What are you?</p>
            <div className="flex flex-row gap-3 justify-center">
              <Role text="Refugee" image={refugee}/>
              <Role text="Volunteer" image={volunteer}/>
              <Role text="NGO" image={ngo}/>
              
            </div>

            <div className="w-full px-4">
              <button className="mt-7 bg-[#004FFF] text-white p-2 rounded-lg w-full">
                Sign Up
              </button>
            </div>
          </div>
          <p className="mt-12 font-playfair font-semibold mb-2">
            Already have an account?{" "}
            <span className="text-[#004FFF] font-playfair">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
