'use client';

import Image from 'next/image';

export default function ChatPopup({ onClose }) {
  return (
    <div className="fixed bottom-24 right-4 w-80 bg-white border border-gray-300 rounded-xl shadow-lg z-[9999] overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 text-white p-3 flex items-center justify-between">
        <span className="font-semibold">Simba - Admission Chatbot</span>
        <button onClick={onClose} className="text-white text-xl">&times;</button>
      </div>

      {/* Chat Body */}
      <div className="p-4 space-y-3 text-sm max-h-[400px] overflow-y-auto">
        <div className="flex gap-2 items-center justify-center">
          <Image src="/loin.png" alt="Simba" width={150} height={150} className="rounded-full" />
         
        </div>

        <div className="flex gap-2 items-start">
          <Image src="/transparent w circle.png" alt="Simba" width={32} height={32} className="rounded-full" />
          <div className="bg-gray-100 px-3 py-2 rounded-xl">
            What may I help you with?
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {["Programs & Brochures", "Apply for Admission", "Placements", "Student Life", "Live Chat"].map((option, i) => (
            <button key={i} className="bg-gray-200 hover:bg-red-100 text-black text-sm py-1 px-2 rounded-full">
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Footer input (optional) */}
      <div className="border-t p-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full border rounded-full px-4 py-1 text-sm focus:outline-none"
        />
      </div>
    </div>
  );
}
