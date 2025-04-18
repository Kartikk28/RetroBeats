import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';

function App() {
  return (
    // ✅ Full page wrapper with background
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white relative"
      style={{ backgroundImage: `url('/retro.png')` }}
    >
      {/* ✅ Black overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>

      {/* ✅ All content on top of overlay */}
      <div className="relative z-10">
        <Navbar />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="search">
          <SearchSection />
        </div>
      {/* ✅ Retro Footer */}
<div id="about">
  <footer className="relative w-full text-white py-20 text-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/retrosearch.png')" }}>

    <h1 className="text-4xl md:text-5xl font-retro text-yellow-300 drop-shadow-[0_0_10px_#facc15] tracking-wider mb-4">
      RetroBeats
    </h1>

    <p className="text-lg md:text-xl font-retro text-[#ffeccc] max-w-2xl mx-auto leading-relaxed tracking-wide text-center italic drop-shadow-[1px_1px_0_rgba(0,0,0,0.25)]">
      “Slip into the crackle of vinyl and rewind the clock to a world of rhythm and romance.
      <br />
      From smoky jazz lounges to rock ‘n’ roll diners — every note whispers nostalgia.”
      <span className="block mt-4 text-sm text-[#d4a373] font-semibold tracking-widest">
        — RetroBeats Archive
      </span>
    </p>

    {/* Retro Icons with warm tones */}
    <div className="mt-8 flex justify-center gap-6 text-yellow-300 text-xl drop-shadow-[0_0_10px_#facc15]">
      <span className="hover:scale-110 transition">📻</span>
      <span className="hover:scale-110 transition">💿</span>
      <span className="hover:scale-110 transition">🎸</span>
      <span className="hover:scale-110 transition">🎷</span>
    </div>

    <p className="mt-10 text-sm text-yellow-200">© 2025 RetroBeats. All rights reserved.</p>
  </footer>
</div>

      </div>
    </div>
  );
}

export default App;
