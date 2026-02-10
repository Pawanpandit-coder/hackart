import React from 'react'
import tech_banner from '../assets/tech_banner.png'

function Crousel() {
  return (
    <div className="relative flex justify-center items-center min-h-[80vh] bg-slate-200 overflow-hidden">
      {/* Background Image */}
      <img
        src={tech_banner}
        alt="Tech Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Overlay Text */}
      <div className="relative text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 drop-shadow-lg">
          India's Largest Hacking Platform.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Join the community, learn, and hack your way to the top.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Crousel
