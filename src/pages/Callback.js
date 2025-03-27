// src/pages/Callback.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    let token = null;

    if (hash) {
      token = new URLSearchParams(hash.substring(1)).get('access_token');
      if (token) {
        localStorage.setItem('spotify_token', token);
        navigate('/');
      }
    }
  }, [navigate]);

  return <p className="text-white text-center mt-10">Logging in with Spotify...</p>;
}

export default Callback;
