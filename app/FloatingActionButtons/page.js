'use client';

import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import ChatPopup from '../ChatPopup/page';

export default function FloatingActionButtons() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      {/* Chat Popup */}
      {openChat && <ChatPopup onClose={() => setOpenChat(false)} />}

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 flex flex-col items-center gap-4 z-50">
        {/* Lion Icon Button */}
        <button
          onClick={() => setOpenChat(true)}
          aria-label="Chatbot"
          className="w-14 h-14 rounded-full bg-red-600 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Image src="/transparent w circle.png" alt="Mascot Icon" width={40} height={40} />
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/7386055697"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-green-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <FaWhatsapp className="text-white text-2xl" />
        </a>
      </div>
    </>
  );
}
