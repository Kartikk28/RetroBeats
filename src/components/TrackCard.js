function TrackCard({ title, artist, year, image, audio }) {
  return (
    <div className="relative bg-[#1f1f1f] border-4 border-pink-300 rounded-xl shadow-lg p-4 text-center transition-transform duration-300 hover:scale-105 group overflow-hidden neon-glow">
      
      {/* Decorative Vinyl Image */}
      <div className="w-full h-40 flex items-center justify-center relative">
        <img
          src={image}
          alt={`${title} cover`}
          className="rounded-full w-32 h-32 object-cover border-4 border-yellow-200 shadow-[0_0_12px_#facc15] group-hover:animate-spin-slow"
        />

        {/* Year Badge */}
        <div className="absolute top-1 left-1 bg-pink-500 text-black text-xs px-2 py-0.5 font-bold font-retro rounded-full shadow-sm tracking-wide">
          🎵 {year}
        </div>
      </div>

      {/* Tooltip on hover */}
      <div className="absolute top-2 right-2 bg-yellow-100 text-black text-[10px] px-2 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-retro">
        ▶ Preview Track
      </div>

      {/* Track Info */}
      <h3 className="text-pink-200 font-retro text-lg mt-4 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
        {title}
      </h3>
      <p className="text-yellow-100 font-body text-sm tracking-wide">
        {artist}
      </p>

      {/* Audio Preview */}
      {audio && (
        <audio
          controls
          className="w-full mt-3 rounded-md bg-zinc-800 text-white"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        >
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default TrackCard;
