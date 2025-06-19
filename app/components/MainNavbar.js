"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-6 py-2 border-b bg-white relative z-20">
      {/* Left Logo + Menu */}
      <div className="flex items-center space-x-4">
        <Image src="/sandiplogo.jpeg" width={120} height={120} alt="Logo" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold">
          <Link href="/about" className="hover:text-red-600">ABOUT</Link>
          <Link href="/schools" className="hover:text-red-600">SCHOOLS</Link>
          <Link href="/academics" className="hover:text-red-600">ACADEMICS</Link>
          <Link href="/admissions" className="hover:text-red-600">ADMISSIONS</Link>
          <Link href="/placements" className="hover:text-red-600">PLACEMENTS</Link>
          <Link href="/campus-life" className="hover:text-red-600">CAMPUS LIFE</Link>
        </nav>
      </div>

      {/* Helpline */}
      <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold text-center">
        <span>📞 Admission Helpline</span>
        <br />
        <span className="text-lg">1800-212-2714</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col py-4 px-6 space-y-3 md:hidden">
          <Link href="/about" className="text-sm font-semibold hover:text-red-600">ABOUT</Link>
          <Link href="/schools" className="text-sm font-semibold hover:text-red-600">SCHOOLS</Link>
          <Link href="/academics" className="text-sm font-semibold hover:text-red-600">ACADEMICS</Link>
          <Link href="/admissions" className="text-sm font-semibold hover:text-red-600">ADMISSIONS</Link>
          <Link href="/placements" className="text-sm font-semibold hover:text-red-600">PLACEMENTS</Link>
          <Link href="/campus-life" className="text-sm font-semibold hover:text-red-600">CAMPUS LIFE</Link>
        </div>
      )}
    </div>
  );
}
