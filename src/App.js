import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import LoginWithSpotify from './components/LoginWithSpotify';
import Callback from './pages/Callback';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <LoginWithSpotify />
                <SearchSection />

                <div className="flex flex-col items-center justify-center text-center pt-20">
                  <h1 className="text-4xl font-bold">RetroBeats 🎶</h1>
                  <p className="text-xl mt-4">Explore hits from 1980 to 2010!</p>
                </div>
              </>
            }
          />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
