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
      className="relative w-full text-white py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/retrosearch.png')" }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-retro text-pink-400 neon-text-glow mb-4 tracking-wider uppercase">
            Hall of Fame Legends
          </h2>
          <p className="text-pink-100 font-body max-w-2xl mx-auto text-md md:text-lg leading-relaxed">
            Step into the spotlight of musical history — these icons gave soul to jukeboxes and heart to vinyl.
          </p>
        </div>

        {/* Legends Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {legends.map((artist, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#1f1f1f] border-2 border-pink-500 rounded-xl p-4 shadow-[0_0_12px_#ff69b4] hover:scale-105 transition duration-300 group"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-yellow-300 shadow-lg group-hover:shadow-[0_0_20px_#ffd700]"
              />
              <p className="mt-4 text-sm md:text-base font-retro text-yellow-100 text-center drop-shadow-sm">
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
