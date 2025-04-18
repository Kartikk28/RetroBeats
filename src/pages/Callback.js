import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const accessToken = queryParams.get('access_token');
    const refreshToken = queryParams.get('refresh_token');
    const expiresIn = queryParams.get('expires_in');

    if (accessToken) {
      localStorage.setItem('spotify_token', accessToken);
      localStorage.setItem('spotify_refresh_token', refreshToken);
      localStorage.setItem('spotify_token_expiry', Date.now() + Number(expiresIn) * 1000);
      navigate('/');
    } else {
      alert("Authentication failed. Try again.");
    }
  }, [navigate]);

  return <p className="text-white text-center mt-10">Logging in with Spotify...</p>;
}

export default Callback;
