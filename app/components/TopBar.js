'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // lucide-react or @heroicons/react

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-red-600 text-white text-sm px-4 py-2">
      {/* Desktop view */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex flex-wrap space-x-4">
          <a href="#">DOWNLOAD E-BROCHURES</a>
          <a href="#">CAREERS</a>
          <a href="#">STUDENT LOGIN</a>
          <a href="#">LOAN FACILITIES</a>
          <a href="#">INTERNATIONAL AFFAIRS CELL</a>
          <a href="#">CONSULTANCY CELL</a>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex md:hidden justify-between items-center">
        <span className="font-semibold">Sandip University</span>
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 text-sm">
          <a href="#">DOWNLOAD E-BROCHURES</a>
          <a href="#">CAREERS</a>
          <a href="#">STUDENT LOGIN</a>
          <a href="#">LOAN FACILITIES</a>
          <a href="#">INTERNATIONAL AFFAIRS CELL</a>
          <a href="#">CONSULTANCY CELL</a>
        </div>
      )}
    </div>
  );
}
