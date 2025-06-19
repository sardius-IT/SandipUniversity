'use client';

import { useEffect, useState, useRef } from 'react';

export default function Popup() {
  const [show, setShow] = useState(false);
  const [permanentlyClosed, setPermanentlyClosed] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!permanentlyClosed) {
      intervalRef.current = setInterval(() => {
        setShow(true);
      }, 5000); // Show every 5 seconds
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [permanentlyClosed]);

  const handleClose = () => {
    setShow(false);
    setPermanentlyClosed(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  if (!show || permanentlyClosed) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999] px-4">
      <div className="bg-yellow-100 rounded-xl p-5 sm:p-6 max-w-sm w-full text-center shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-black text-white rounded-full w-6 h-6 text-sm flex items-center justify-center hover:bg-gray-800"
        >
          ×
        </button>

        {/* Logo */}
        <img
          src="/sandiplogo.jpeg"
          alt="Sandip University Logo"
          className="w-full rounded-xl mb-3"
        />

        {/* Welcome Text */}
        <h3 className="text-base sm:text-lg font-bold mb-2">
          Welcome to Sandip University
        </h3>

        {/* Admissions Info Box */}
        <div className="bg-white rounded-xl p-3 mb-4 text-sm sm:text-base">
          <h4 className="text-base font-semibold">Admissions Open 2025–26</h4>
          <p className="text-red-600 font-bold mt-1">
            Seats Are Filling Fast, Secure Your Future Today
          </p>
        </div>

        {/* CTA Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded text-sm sm:text-base">
          Apply Now
        </button>
      </div>
    </div>
  );
}
