function TrackCard({ title, artist, image, year }) {
    return (
      <div className="bg-gray-900 rounded-xl shadow-md p-4 hover:scale-105 transition-transform">
        <img
          src={image}
          alt={`${title} cover`}
          onError={(e) => { e.target.src = '/default.jpg'; }}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm text-gray-400">by {artist}</p>
        <p className="text-xs text-gray-500">Released: {year}</p>
      </div>
    );
  }
  
   
  
  export default TrackCard;
  