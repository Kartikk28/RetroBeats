function Navbar() {
    return (
      <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">RetroBeats 🎶</h1>
        <ul className="flex space-x-6 text-sm md:text-base">
          <li className="hover:text-pink-400 cursor-pointer">Home</li>
          <li className="hover:text-pink-400 cursor-pointer">Search</li>
          <li className="hover:text-pink-400 cursor-pointer">About</li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  