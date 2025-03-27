import { useState } from 'react';
import TrackCard from './TrackCard';

function SearchSection() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);

    const token = localStorage.getItem('spotify_token');
    if (!token) {
      alert('Please connect to Spotify first.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=12`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      // Log the full track object so you can inspect preview_url
      console.log('Fetched tracks:', data.tracks?.items);

      if (!data.tracks?.items) {
        alert('No tracks found or token might have expired.');
        setLoading(false);
        return;
      }

      const results = data.tracks.items.map(track => ({
        name: track.name,
        artist: track.artists[0]?.name || 'Unknown Artist',
        year: track.album.release_date?.split('-')[0] || 'Unknown',
        image: track.album.images[0]?.url || '/default.jpg',
        audio: track.preview_url // this might be null
      }));

      setTracks(results);
    } catch (error) {
      console.error('Error fetching from Spotify:', error);
      alert('Spotify search failed. Try reconnecting.');
    }

    setLoading(false);
  };

  return (
    <div className="w-full bg-black text-white py-12 flex flex-col items-center">
      <h3 className="text-2xl font-semibold mb-6">Search by Artist, Song, or Year</h3>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="e.g. Elvis, 1984, Beatles"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 rounded-full text-black w-72 md:w-96"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-semibold transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="mt-6 text-gray-400">Loading tracks...</p>}
      {!loading && tracks.length === 0 && (
        <p className="mt-6 text-gray-500">No results found. Try another artist or song.</p>
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
  );
}

export default SearchSection;
