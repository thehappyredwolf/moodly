import { Fugaz_One } from "next/font/google";
import React from "react";
import Button from "./Button";

const fugazOne = Fugaz_One({
  variable: "--font-fugaz-one",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Login() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={`text-4xl sm:text-5xl md:text-6xl ${fugazOne.className}`}>
        Log In / Register
      </h3>
      <p>You are one step away!</p>
      <input
        className="max-w-[400px] w-full mx-auto px-3 py-2 duration-200 hover:border-indigo-600
       sm:py-3 border border-solid border-indigo-400 rounded-full outline-none focus:border-indigo-600"
        placeholder="Email"
        type="email"
      />
      <input
        className="max-w-[400px] w-full mx-auto px-3 py-2 duration-200 hover:border-indigo-600
       sm:py-3 border border-solid border-indigo-400 rounded-full outline-none focus:border-indigo-600"
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button text="Submit" full />
      </div>
      <p className="text-center">Do not have an account? <span className="text-indigo-600">Sign Up</span></p>
    </div>
  );
}
