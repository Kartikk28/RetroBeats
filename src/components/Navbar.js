import { useEffect, useState } from 'react';

function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll progress
  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 🔼 Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-pink-400 z-[100] transition-all duration-200" style={{ width: `${scrollProgress}%` }}></div>

      {/* 🔲 Sticky Navbar */}
      <nav className="sticky top-0 w-full z-50 backdrop-blur-lg bg-black/60 border-b-2 border-pink-300 shadow-md text-[#ffe2ec] px-8 py-5 flex items-center justify-between font-retro">
        {/* Logo */}
        <h1
          className="text-3xl font-extrabold tracking-wider animate-pulse-slow drop-shadow-[0_0_8px_rgba(255,105,180,0.6)] cursor-pointer"
          onClick={() => scrollTo('hero')}
        >
          RetroBeats 🎶
        </h1>

        {/* Links */}
        <ul className="flex space-x-8 text-lg">
          {[
            { name: 'Home', id: 'hero' },
            { name: 'Search', id: 'search' },
            { name: 'About', id: 'about' }
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => scrollTo(item.id)}
              className="cursor-pointer relative hover:text-yellow-300 transition duration-300 group"
            >
              {item.name}
              <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-500 bg-yellow-300"></span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
