'use client';

import { motion } from 'framer-motion';

export default function WhySandipUniversity() {
  return (
    <section className="flex flex-col md:flex-row font-sans border border-gray-300">
      {/* Left Column */}
      <div className="flex-1 min-w-[300px] p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Why <span className="text-black">Sandip University</span>?
        </h2>
        <ul className="list-none space-y-3 mt-4 text-sm sm:text-base">
          {[
            'Hands-On Skill Development via Industry Training',
            'Awarded Prestigious Research Grants',
            'Value Added & Certification Programs',
            'Dedicated Innovation & Entrepreneurship Development Cell',
            '“Advanced Learner” Training & Placement Program',
            'SandipTM Incubator Cell for Entrepreneurship Development',
            'Compulsory Internships',
            '16+ MoUs with Global Universities',
            'Holistic Student Experience',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-red-600 text-lg">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column (Animated Stats Block) */}
      <div className="flex-1 min-w-[300px] bg-red-600 text-white p-6 sm:p-8 md:p-10 relative overflow-hidden flex items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Legacy of Success</h2>
          <h3 className="text-xl sm:text-2xl font-semibold mt-6">
            3rd Top Emerging Engineering Institutes
          </h3>
          <hr className="border-white my-4 w-1/2 md:w-full mx-auto md:mx-0" />
          <p className="text-sm sm:text-base">Times Engineering Survey of 2024</p>
        </motion.div>
      </div>
    </section>
  );
}
