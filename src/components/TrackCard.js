import { useRef } from 'react';

function TrackCard({ title, artist, image, year, audio }) {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audio) {
      audioRef.current?.play();
    }
  };

  return (
    <div
      className="relative bg-gray-900 rounded-xl shadow-md p-4 transition-transform hover:scale-105"
    >
      <img
        src={image}
        alt={`${title} cover`}
        onError={(e) => { e.target.src = '/default.jpg'; }}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Play badge or mute indicator */}
      {audio ? (
        <button
          onClick={handlePlay}
          className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
        >
          ▶️ Play
        </button>
      ) : (
        <div className="absolute top-2 right-2 bg-gray-600 text-white px-2 py-1 rounded text-xs cursor-not-allowed">
          🔇 No Preview
        </div>
      )}

      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm text-gray-400">by {artist}</p>
      <p className="text-xs text-gray-500">Released: {year}</p>
      {audio && <audio ref={audioRef} src={audio} preload="auto" />}
    </div>
  );
}

export default TrackCard;
