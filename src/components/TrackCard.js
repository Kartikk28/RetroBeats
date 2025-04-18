function TrackCard({ title, artist, year, image, audio }) {
  return (
    <div className="bg-gray-900 rounded-xl shadow-md p-4 hover:scale-105 transition-transform">
      <img
        src={image}
        alt={`${title} cover`}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm text-gray-400">by {artist} ({year})</p>

      {audio ? (
        <audio controls className="mt-4 w-full rounded">
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p className="text-xs text-gray-500 mt-2">No preview available</p>
      )}
    </div>
  );
}

export default TrackCard;
