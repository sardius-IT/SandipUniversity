export default function StudentsPlacedGlobally() {
  const students = [
    {
      name: 'Yashswati Bangar',
      title: 'General Manager, USA',
      image: '/1.jpg',
    },
    {
      name: 'Roshan Patil',
      title: 'Senior Software Engineer, Germany',
      image: '/2.jpg',
    },
    {
      name: 'Umesh Jadhav',
      title: 'Engineering Lead, Pune',
      image: '/5.jpg',
    },
    {
      name: 'Deeraj Patil',
      title: 'Software Engineer, Singapore',
      image: '/3.jpg',
    },
    {
      name: 'Sagar Kanade',
      title: 'Software Engineer, Bangalore',
      image: '/6.jpg',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Our Students Placed Globally
          <div className="border-b-4 border-red-500 w-16 mx-auto mt-2"></div>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {students.map((student, index) => (
            <div
              key={index}
              className="relative w-40 sm:w-48 md:w-56 bg-gray-100 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-56 object-cover"
              />

              {/* Rotated label for medium and up screens */}
              <div className="hidden sm:flex absolute top-0 left-0 h-full w-8 bg-black/80 items-center justify-center">
                <span className="text-white text-xs font-bold rotate-90 whitespace-nowrap">
                  {student.name} - {student.title}
                </span>
              </div>

              {/* Normal label for mobile */}
              <div className="sm:hidden p-3 bg-black text-white text-center">
                <p className="text-sm font-semibold">{student.name}</p>
                <p className="text-xs">{student.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
