// src/components/LoginWithSpotify.js

const CLIENT_ID = 'e01dc856c7a941f3843cead4bcecbe0a';
const REDIRECT_URI = 'http://localhost:3000/callback';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';

// These are the scopes your app needs
const SCOPES = [
  'streaming',
  'user-read-email',
  'user-read-private'
];

function LoginWithSpotify() {
  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join('%20')}&show_dialog=true`;

  return (
    <div className="text-center my-6">
      <a
        href={loginUrl}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition"
      >
        Connect with Spotify
      </a>
    </div>
  );
}

export default LoginWithSpotify;
