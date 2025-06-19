"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const companies = [
  { name: "Atos", src: "/l2.png" },
  { name: "Mahindra Rise", src: "/l46.png" },
  { name: "Infosys", src: "/l23.png" },
  { name: "Amazon", src: "/l22.png" },
  { name: "Accenture", src: "/l20.png" },
  { name: "Capgemini", src: "/l18.png" },
  { name: "Capgemini", src: "/l3.png" },
  { name: "Capgemini", src: "/6.png" },
  { name: "Capgemini", src: "/5.png" },
];

export default function TopRecruiters() {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Our Top Recruiters & Placements
        </h2>
        <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 mb-6">
          Start your Journey to Innovation here at Sandip University
        </p>

        <div className="flex justify-center mb-10">
          <button className="border-b-4 border-red-500 px-4 py-2 text-gray-800 font-semibold">
            National
          </button>
          <button className="px-4 py-2 text-gray-600 font-medium hover:text-gray-800">
            International
          </button>
        </div>

        <div className="bg-gray-200 rounded-2xl text-white text-xs sm:text-sm py-2 px-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <div className="flex space-x-6 w-max">
              {companies.map((company, i) => (
                <div
                  key={i}
                  className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center h-28 min-w-[180px]"
                >
                  <Image
                    src={company.src}
                    alt={company.name}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

