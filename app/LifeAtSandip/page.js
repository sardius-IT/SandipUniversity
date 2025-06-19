export default function LifeAtSandip() {
  const facilities = [
    { title: 'Hostels', image: '/hostal.jpg' },
    { title: 'Hygienic Canteens', image: '/canteen.jpg' },
    { title: 'High-tech Classrooms', image: '/high-tech.jpg' },
    { title: 'Salon', image: '/Salon.jpeg' },
    { title: 'Gymnasium', image: '/gym.jpg' },
    { title: 'Library', image: '/library-img.webp' },
    { title: '24x7 Security', image: '/security.webp' },
    { title: 'On-campus Ambulance', image: '/ambulance.png' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 pb-2">
          Life at Sandip University
          <div className="border-b-4 border-red-500 w-16 mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 hover:-translate-y-1"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-44 sm:h-48 object-cover"
              />
              <div className="bg-red-600 text-white py-3 px-4 text-center font-semibold text-base sm:text-lg">
                {facility.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
