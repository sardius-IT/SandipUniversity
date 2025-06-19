import Image from "next/image";

export default function UniversityIntroSection() {
  const stats = [
    { number: "250+", label: "Acres Campus" },
    { number: "10,000+", label: "Alumni Students" },
    { number: "4ᵗʰ", label: "Top Ranking University" },
    { number: "IIT/NITS", label: "Experienced Faculties" },
    { number: "100%", label: "Placement Assistance" },
    { number: "120+", label: "Patents Filed" },
  ];

  return (
    <>
      {/* Stats Bar */}
      <section className="bg-red-600 text-white w-full py-6">
        <div className="flex flex-wrap justify-center gap-y-6 gap-x-8 px-4 sm:px-6 md:px-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[140px] max-w-[180px] text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold">{item.number}</p>
              <p className="text-sm sm:text-base mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row w-full">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-64 sm:h-96 md:h-[500px] relative">
          <Image
            src="/college buliding.jpg"
            alt="Sandip University Campus"
            layout="fill"
            objectFit="cover"
            className="rounded-none"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 bg-white p-6 sm:p-10 md:p-12 text-black flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 border-b-4 border-red-600 inline-block">
            Top Private University in India
          </h2>

          <p className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Sandip University is a thriving hub of 21st century higher education.
            It is a UGC-approved University in India, located in Nashik,
            Maharashtra. The University is set in a picturesque lush green Wi-Fi
            enabled campus spanning across 250+ acres and is home to cutting-edge
            infrastructure for a holistic student experience.
          </p>

          <p className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
            As a best private university in Nashik, Maharashtra, Sandip University
            attuned to the pulse of global educational standards, and so provides
            students with an education that takes them places. Our placement cell
            trains students through mock interviews and helps them write a dynamic
            resume.
          </p>

          <button className="bg-gray-200 text-red-600 font-semibold px-4 py-2 rounded hover:bg-red-600 hover:text-white transition w-max text-sm sm:text-base">
            Know More
          </button>
        </div>
      </section>
    </>
  );
}
