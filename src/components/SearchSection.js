function SearchSection() {
  const legends = [
    { name: 'Elvis Presley', image: '/elvis.webp' },
    { name: 'Aretha Franklin', image: '/aretha.png' },
    { name: 'The Beatles', image: '/thebeatles.jpg' },
    { name: 'Frank Sinatra', image: '/frank.jpg' },
    { name: 'Marvin Gaye', image: '/marvingaye.jpg' },
    { name: 'Ray Charles', image: '/raycharles.avif' },
    { name: 'Patsy Cline', image: '/patsycline.jpg' },
    { name: 'James Brown', image: '/jamesbrown.jpg' },
    { name: 'Johnny Cash', image: '/johnnycash.jpg' },
  ];

  return (
    <div
      className="relative w-full text-white py-20 overflow-hidden px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/retrosearch.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-retro text-pink-200 mb-4 drop-shadow-xl">Hall of Fame Legends</h2>
          <p className="text-gray-300 font-body max-w-2xl mx-auto">
            Meet the voices that shaped the golden era of music. From soulful ballads to rock & roll anthems — these legends defined generations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {legends.map((artist, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-zinc-800 rounded-xl shadow-md p-4 hover:scale-105 transition transform duration-300"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-pink-300 shadow-inner"
              />
              <p className="mt-4 text-sm md:text-base font-semibold font-body text-yellow-100 text-center">
                {artist.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
