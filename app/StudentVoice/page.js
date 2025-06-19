"use client";

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function StudentVoice() {
  const testimonials = [
    {
      name: "Saloni Aher",
      title: "AEROSPACE ENGINEERING",
      image: "/t1.jpg",
      text: `I am Saloni Aher, a B.Tech Aerospace student at Sandip University. The strong foundation here helped me secure a placement at FlyLab Solutions.`,
    },
    {
      name: "Rahul Sharma",
      title: "MECHANICAL ENGINEERING",
      image: "/t2.jpg",
      text: `As a Mechanical Engineering student, I received excellent hands-on training that boosted my skills and career prospects.`,
    },
    {
      name: "Aman Verma",
      title: "COMPUTER SCIENCE",
      image: "/r2.jpg",
      text: `The CSE department offered amazing mentorship and project opportunities, helping me land an internship at a top tech firm.`,
    },
    {
      name: "Aman Verma",
      title: "COMPUTER SCIENCE",
      image: "/t3.jpg",
      text: `The CSE department offered amazing mentorship and project opportunities, helping me land an internship at a top tech firm.`,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Auto change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <section
      className="relative bg-gray-900 text-white py-16 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('/world map.webp')`,
      }}
    >
      <div className="bg-black/70 absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Student&apos;s Voice
          <div className="border-b-4 border-red-500 w-16 mx-auto mt-2"></div>
        </h2>

        <p className="text-base sm:text-lg leading-relaxed mb-8 transition-all duration-500 ease-in-out px-2 sm:px-0">
          {testimonials[index].text}
        </p>

        <div className="flex justify-center items-center mb-4">
          <Image
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-300 object-cover transition-all duration-500 ease-in-out"
            width={96} // or adjust based on your design
            height={96}
          />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold">
          {testimonials[index].name}
        </h3>
        <p className="uppercase text-xs sm:text-sm text-gray-300 mt-1 tracking-wide">
          {testimonials[index].title}
        </p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 text-white p-1.5 sm:p-2 bg-gray-800 bg-opacity-70 rounded-full hover:bg-gray-700 transition z-20"
        aria-label="Previous"
      >
        <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 text-white p-1.5 sm:p-2 bg-gray-800 bg-opacity-70 rounded-full hover:bg-gray-700 transition z-20"
        aria-label="Next"
      >
        <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </section>
  );
}
