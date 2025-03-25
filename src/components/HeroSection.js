function HeroSection() {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-gray-900 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Relive the Golden Era 🎧
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Discover timeless tracks from 1980 to 2010. Create your playlist. Feel the nostalgia.
        </p>
        <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition">
          Get Started
        </button>
      </div>
    );
  }
  
  export default HeroSection;
  