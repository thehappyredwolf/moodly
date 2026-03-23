import { Fugaz_One } from 'next/font/google';
import React from 'react'


const fugazOne = Fugaz_One({
  variable: "--font-fugaz-one",
  subsets: ["latin"],
  weight: ["400"]
});


export default function Hero() {
  return (
    <div className="py-10 sm:py-14 md:py-20">
      <h1 className={`${fugazOne.className}`} ><span>Moodly</span> helps you track your <span>daily</span> mood!</h1>
    </div>
  )
}
