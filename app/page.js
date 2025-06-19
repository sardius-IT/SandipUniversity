'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import TopBar from './components/TopBar';
import MainNavbar from './components/MainNavbar';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import WhySandipUniversity from './WhySandipUniversity/page';
import UniversityIntroSection from "./UniversityIntroSection/page";
import Popup from './Popup/page';
import LifeAtSandip from './LifeAtSandip/page';
import StudentVoice from './StudentVoice/page';
import StudentsPlacedGlobally from './StudentsPlacedGloball/page';
import FloatingActionButtons from './FloatingActionButtons/page';
import StickySideButtons from './StickySideButtons/page';

export default function Home() {
  const heroImages = [
    '/home image1.jpg',
    '/home image2.jpg',
    '/home image3.jpg',
    '/home image4.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;

    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, mobile })
    });

    const data = await res.json();
    if (res.ok) {
      alert('Enquiry sent!');
    } else {
      alert(data.error || 'Something went wrong.');
    }
  };

  return (
    <div className="bg-white text-black">
      <TopBar />
      <MainNavbar />
      <AnnouncementBar />

      <section className="relative min-h-[80vh] sm:min-h-[100vh] w-full overflow-hidden">
        <Image
          key={currentImage}
          src={heroImages[currentImage]}
          alt={`Hero Banner ${currentImage + 1}`}
          fill
          className="object-cover"
          quality={100}
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center md:justify-end px-4">
          <div className="bg-black/60 p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-md text-white shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-2">Enquire Now</h2>
            <p className="text-center text-sm mb-4">
              Enter Contact Details for Admissions
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                maxLength={50}
                pattern="^[A-Za-z\s]+$"
                title="Only alphabets are allowed"
                placeholder="Name*"
                required
                className="w-full p-3 rounded border border-gray-300 text-white bg-transparent focus:outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Email*"
                required
                className="w-full p-3 rounded border border-gray-300 text-white bg-transparent focus:outline-none"
              />
              <input
                name="mobile"
                type="tel"
                pattern="[0-9]{10,}"
                title="Enter a valid 10-digit number"
                placeholder="Mobile*"
                required
                className="w-full p-3 rounded border border-gray-300 text-white bg-transparent focus:outline-none"
              />
              <p className="text-xs text-white">
                By submitting this form, I consent to receive communications
                from the University through WhatsApp, SMS, email, phone calls,
                and other channels, even if my number is registered on DND/NDNC.
              </p>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-1">
        <UniversityIntroSection />
      </section>
        <Popup />
        <WhySandipUniversity />
          <LifeAtSandip />
              <StudentVoice />
               <StudentsPlacedGlobally />
               <FloatingActionButtons />
 <StickySideButtons />
      <Footer />
    </div>
  );
}
