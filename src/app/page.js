'use client';
import { useState, useRef } from 'react';
import { FaHeart, FaStar, FaRunning, FaArrowDown } from 'react-icons/fa';
import InfiniteImageScroll from '@/components/InfiniteImageScroll';

export default function Home() {
  const [isHolding, setIsHolding] = useState(false);
  const secondSectionRef = useRef(null);

  const handleMouseDown = () => setIsHolding(true);
  const handleMouseUp = () => setIsHolding(false);

  const scrollToSecondSection = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center bg-slate-50">
        <h1 
          className={`text-4xl md:text-6xl font-bold text-gray-800 font-reenie-beanie cursor-pointer transition-colors duration-300 ${isHolding ? 'text-pink-500 animate-shake' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          Athena Wang
        </h1>
        <div className="mt-4 flex space-x-4">
          <FaHeart className="text-red-500 text-2xl" />
          <FaStar className="text-yellow-500 text-2xl" />
          <FaRunning className="text-blue-500 text-2xl" />
        </div>
        <div className="mt-48 flex space-x-4">
          <FaArrowDown 
            className="text-gray-800 text-2xl animate-bounce cursor-pointer" 
            onClick={scrollToSecondSection}
          />
        </div>
      </main>
      <section 
        ref={secondSectionRef} 
        className="min-h-screen bg-slate-100 px-48"
      >
        <InfiniteImageScroll />
      </section>
      <footer className="absolute bottom-0 w-full flex items-center justify-center py-8 text-gray-500 text-sm">Made with ♥ by Alex</footer>
    </>
  );
}
