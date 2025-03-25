import { useState } from 'react';
import TrackCard from './TrackCard';

function SearchSection() {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://musicbrainz.org/ws/2/recording/?query=${encodeURIComponent(query)}&fmt=json&limit=50`
      );
      const data = await response.json();
      console.log('Fetched data from MusicBrainz:', data);

      const q = query.toLowerCase();

      const filtered = data.recordings.filter(track => {
        const title = track.title?.toLowerCase() || '';
        const artist = track['artist-credit']?.[0]?.name?.toLowerCase() || '';
        return (
          title.includes(q) ||
          artist.includes(q) ||
          artist === q
        );
      });

      // Remove duplicates by track title + artist combo
      const uniqueTracks = [];
      const seen = new Set();

      for (const track of filtered) {
        const key = `${track.title}-${track['artist-credit']?.[0]?.name}`;
        if (!seen.has(key)) {
          seen.add(key);

          const releaseId = track.releases?.[0]?.id;
          const releaseDate = track.releases?.[0]?.date || 'Unknown';

          uniqueTracks.push({
            name: track.title,
            artist: track['artist-credit']?.[0]?.name || 'Unknown Artist',
            year: releaseDate,
            image: [
              {}, {}, {
                '#text': releaseId
                  ? `https://coverartarchive.org/release/${releaseId}/front`
                  : '/default.jpg'
              }
            ]
          });
        }
      }

      setTracks(uniqueTracks.slice(0, 12));
    } catch (error) {
      console.error('Error fetching tracks from MusicBrainz:', error);
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
          className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold transition"
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
            image={
              track.image?.[2]?.['#text'] ||
              'https://via.placeholder.com/300x300.png?text=No+Cover'
            }
          />
        ))}
      </div>
    </div>
  );
}

export default SearchSection;
