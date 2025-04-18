import { useState } from 'react';
import TrackCard from './TrackCard';
import { genreMap } from '../data/genreMap';

function HeroSection() {
  const [query, setQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const trimmed = query.trim();

    if (!trimmed && !selectedGenre) {
      setTracks([]);
      return;
    }

    setLoading(true);
    let apiUrl = '';

    if (selectedGenre) {
      apiUrl = `https://itunes.apple.com/search?term=${selectedGenre}&media=music&limit=12`;
    } else {
      apiUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(trimmed)}&media=music&limit=12`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const results = data.results.map(track => ({
        name: track.trackName,
        artist: track.artistName,
        year: track.releaseDate?.split('-')[0] || 'Unknown',
        image: track.artworkUrl100?.replace('100x100', '300x300') || '/default.jpg',
        audio: track.previewUrl || null
      }));

      setTracks(results);
    } catch (error) {
      console.error('❌ Error fetching from iTunes:', error);
    }

    setLoading(false);
  };

  const handleClear = () => {
    setQuery('');
    setSelectedGenre('');
    setTracks([]);
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: `url('/bg.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10 z-0"></div>

      <div className="z-10 text-center max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-retro text-[#f9f1e9] drop-shadow-xl mb-4 tracking-wider relative z-10">


          Welcome to the Sound of the 1900s 
        </h1>
        <p className="text-md md:text-lg text-[#fffaf0] font-retro mb-6 tracking-wide drop-shadow-[2px_2px_1px_rgba(0,0,0,0.4)]">
          From jukebox hits to golden vinyl grooves — rediscover music that defined generations.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="text"
            placeholder="e.g. Elvis, 1984, Beatles"
            value={query}
            onChange={(e) => {
              const newQuery = e.target.value;
              setQuery(newQuery);
              if (newQuery.trim() === '') setTracks([]);
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="px-4 py-3 w-72 md:w-96 rounded-full text-black font-body text-sm shadow-md border-2 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            style={{ backgroundColor: '#fff3f8' }}
          />

          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="px-4 py-3 w-60 rounded-full text-black font-body text-sm border-2 border-yellow-300 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            style={{ backgroundColor: '#fffbe6' }}
          >
            <option value="">🎼 Browse by Genre</option>
            {Object.keys(genreMap).map((artist) => (
              <option key={artist} value={artist}>
                {artist}
              </option>
            ))}
          </select>

          <button
            onClick={handleSearch}
            className="bg-[#ff4f81] hover:bg-[#e04070] text-white font-retro px-6 py-3 rounded-[10px] shadow-[4px_4px_0px_#3b2f2f] border-2 border-[#3b2f2f] transition-all duration-200 hover:translate-y-[2px] hover:shadow-none"
          >
            Search
          </button>

          <button
            onClick={handleClear}
            className="text-gray-400 hover:text-white text-xs mt-2 md:mt-0 underline"
          >
            Clear
          </button>
        </div>

        {loading && <p className="mt-6 text-gray-300 font-body">Loading tracks...</p>}
        {!loading && tracks.length === 0 && (
          <p className="mt-6 text-gray-300 font-body">No results found. Try a different search or genre.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
          {tracks.map((track, index) => (
            <TrackCard
              key={index}
              title={track.name}
              artist={track.artist}
              year={track.year}
              image={track.image}
              audio={track.audio}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
