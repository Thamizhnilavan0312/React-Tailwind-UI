import React from 'react'

const Hero = () => {
  return (
<section className='bg-gray-100 text-center py-16'>
    <img className='mx-auto rounded-lg shadow-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPCNlr114udk91XPvvOGBfmKH-vKDZjdnyqg&s" alt="Coding Image" />
    <h2 className='text-3xl font-bold mt-4'>🏗️Build Amazing UIs with React & Vite</h2>
    <p className='text-gray-600 mt-2'>Fast, Lightweight and modern frontend development.</p>
    <button className='bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition text-white mt-4'>🔘Get Started</button>
</section>
);
};

export default Hero; 