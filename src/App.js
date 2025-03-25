import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <SearchSection />

      <div className="flex flex-col items-center justify-center text-center pt-20">
        <h1 className="text-4xl font-bold">RetroBeats 🎶</h1>
        <p className="text-xl mt-4">Explore hits from 1980 to 2010!</p>
      </div>
    </div>
  );
}

export default App;
