function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="w-full bg-black text-[#ffdee9] px-8 py-5 flex items-center justify-between shadow-[0_4px_8px_rgba(255,192,203,0.3)] border-b-2 border-pink-300 font-retro">
      {/* RetroBeats Logo */}
      <h1
        className="text-3xl font-extrabold tracking-wider drop-shadow-[0_1px_2px_rgba(255,105,180,0.5)] animate-pulse-slow cursor-pointer"
        onClick={() => scrollToSection('hero')}
      >
        RetroBeats
      </h1>

      {/* Nav Links */}
      <ul className="flex space-x-8 text-lg">
        <li onClick={() => scrollToSection('hero')} className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.4)]">
          Home
        </li>
        <li onClick={() => scrollToSection('search')} className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.4)]">
          Search
        </li>
        <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-yellow-300 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,0,0.4)]">
          About
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
