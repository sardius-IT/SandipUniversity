'use client';

import Image from "next/image";
import TopBar from '../components/TopBar';
import MainNavbar from '../components/MainNavbar';
import AnnouncementBar from '../components/AnnouncementBar';
import TopRecruiters from "../TopRecruiters/page";
import { motion } from 'framer-motion';
import FloatingActionButtons from '../FloatingActionButtons/page';
import StickySideButtons from '../StickySideButtons/page';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <section className="w-full">
      <TopBar />
      <MainNavbar />
      <AnnouncementBar />

      {/* Hero Image */}
      <div className="relative w-full h-[60vh] sm:h-[80vh]">
        <Image
          src="/about (1).jpg"
          alt="Sandip University Campus"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <section className="bg-white text-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-6 text-justify">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Study at a state of the art campus located in the lap of nature. Sandip University’s 250+ acre campus is a global hub of cutting-edge education and dynamic student development. Since its inception in 2017, Sandip University has created a positive and futuristic hub of education. Our values are steeped in providing various industries with top-notch talent in terms of academic knowledge and hands-on skills.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our students are trained to become global leaders rather than followers. Sandip University’s educational programmes are designed to be in sync with <strong>Education 4.0</strong> and <strong>Industry 4.0</strong>, while paving the way for <strong>Education 5.0</strong> and <strong>Industry 5.0</strong>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Sandip University’s faculty members are pioneers and groundbreaking seekers of innovative ideas, constantly pushing for invigorating excellence from our students. They are well-read and well-qualified professors holding qualifications from IITs, NITs and IIMs across India.
          </motion.p>
        </div>

        {/* Wide image */}
        <div className="w-full">
          <Image
            src="/piller.jpg"
            alt="Sandip University Features"
            width={1800}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Futuristic Curriculum */}
        <section className="bg-gray-100 py-12">
          <h2 className="text-3xl font-bold text-center mb-2">Futuristic Curriculum</h2>
          <div className="border-b-2 border-red-500 w-24 mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl px-4 mx-auto">
            {[
              { src: "/Machanical.jpg", label: "Choice-Based Credit System" },
              { src: "/Microbiology.jpg", label: "Access Through Student Centric Education" },
              { src: "/sp-01.jpg", label: "Introduction of Minor and Majors [for multiple exits]" },
              { src: "/sp-01.jpg", label: "Introduction of Minor and Majors [for multiple exits]" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded shadow-md overflow-hidden">
                <Image src={item.src} alt={item.label} width={600} height={400} className="w-full h-60 object-cover" />
                <div className="p-4 text-center font-medium text-lg border-t-2 border-red-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Exposure */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-2">Global Exposure</h2>
          <div className="border-b-2 border-red-500 w-24 mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl px-4 mx-auto">
            {[
              { src: "/g12.jpg", label: "International Tie-Ups" },
              { src: "/Greece.jpg", label: "Student-Exchange Programs" },
              { src: "/Rakesh-1.jpg", label: "Faculty Exchange Programs" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <Image src={item.src} alt={item.label} width={600} height={400} className="w-full h-60 object-cover" />
                <div className="text-center p-4 font-medium text-lg bg-white rounded-b-md">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mt-10 px-4 mx-auto">
            <Image src="/act-2.jpg" alt="Collaboration" width={600} height={400} className="rounded-lg shadow-md w-full h-60 object-cover" />
            <Image src="/sop11.jpg" alt="Teesside University" width={600} height={400} className="rounded-lg shadow-md w-full h-60 object-cover" />
          </div>
        </section>

        {/* Beyond the Classroom */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-2">Beyond the Classroom</h2>
          <div className="border-b-2 border-red-500 w-24 mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl px-4 mx-auto">
            {[
              { src: "/Combined.jpg", label: "SUN Clubs" },
              { src: "/sun-club.jpg", label: "Inter-College Competitions" },
              { src: "/student-development.jpg", label: "Workshops" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <Image src={item.src} alt={item.label} width={600} height={400} className="w-full h-60 object-cover" />
                <div className="text-center p-4 font-medium text-lg bg-white rounded-b-md">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mt-10 px-4 mx-auto">
            <Image src="/sport.jpg" alt="Student Participation" width={600} height={400} className="rounded-lg shadow-md w-full h-60 object-cover" />
            <Image src="/competation.jpg" alt="Student Seminar" width={600} height={400} className="rounded-lg shadow-md w-full h-60 object-cover" />
          </div>
        </section>

        {/* Recruiters + Footer */}
        <TopRecruiters />
        <FloatingActionButtons />
        <StickySideButtons />
        <Footer />
      </section>
    </section>
  );
}
