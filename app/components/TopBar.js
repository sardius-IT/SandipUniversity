'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaWhatsapp,
} from 'react-icons/fa6'; // or 'react-icons/fa' if preferred

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-red-600 text-white text-sm px-4 py-2">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center">
        {/* Left Section - Links */}
        <div className="flex flex-wrap space-x-4 text-sm">
          <a href="#">DOWNLOAD E-BROCHURES</a>
          <a href="#">CAREERS</a>
        
          <a href="#">LOAN FACILITIES</a>
          <a href="#">INTERNATIONAL AFFAIRS CELL</a>
         
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex items-center space-x-4 text-sm">
          <span className="font-semibold text-sm">Get Connected</span>
          <a href="https://wa.me/7386055697"><FaWhatsapp className="text-xl" /></a>

          <span className="font-semibold ml-4">Get Social</span>
          <a href="https://www.facebook.com/profile.php?id=61576593147953"><FaFacebookF className="text-xl" /></a>
          <a href="https://x.com/sandipuniv"><FaXTwitter className="text-xl" /></a>
          <a href="https://in.linkedin.com/school/sandipuniversity/ "><FaLinkedinIn className="text-xl" /></a>
          <a href="https://www.instagram.com/sandip_university25?igsh=Mmx4NTlqYnFhNjMw"><FaInstagram className="text-xl" /></a>
          <a href=" youtube.com/channel/UCDAaVM3kH_Jk7jgSaQj5xFw"><FaYoutube className="text-xl" /></a>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden justify-between items-center">
        <span className="font-semibold">Sandip University</span>
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-2 flex flex-col space-y-3 text-sm">
          <a href="#">DOWNLOAD E-BROCHURES</a>
          <a href="#">CAREERS</a>
          <a href="#">STUDENT LOGIN</a>
          <a href="#">LOAN FACILITIES</a>
          <a href="#">INTERNATIONAL AFFAIRS CELL</a>
          <a href="#">CONSULTANCY CELL</a>

          <div className="mt-4">
            <div className="text-xs font-semibold mb-1">Get Connected</div>
            <div className="flex space-x-4 text-xl">
              <a href="https://wa.me/7386055697"><FaWhatsapp /></a>
              <a href="#"><img src="/360-icon.png" alt="360 View" className="w-6 h-6 rounded-full" /></a>
            </div>

            <div className="text-xs font-semibold mt-3 mb-1">Get Social</div>
            <div className="flex space-x-4 text-xl">
              <a href="https://www.facebook.com/profile.php?id=61576593147953"><FaFacebookF /></a>
              <a href="https://x.com/sandipuniv"><FaXTwitter /></a>
              <a href="https://in.linkedin.com/school/sandipuniversity/ "><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/sandip_university25?igsh=Mmx4NTlqYnFhNjMw"><FaInstagram /></a>
              <a href=" youtube.com/channel/UCDAaVM3kH_Jk7jgSaQj5xFw"><FaYoutube /></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

