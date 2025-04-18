// index.js (Spotify backend for RetroBeats)
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const querystring = require('querystring');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());

const PORT = 3001;
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// Log to confirm .env is loaded correctly
console.log('🔐 CLIENT_ID:', CLIENT_ID || '❌ Not set');
console.log('🔐 CLIENT_SECRET:', CLIENT_SECRET ? '✅ Loaded' : '❌ Missing');
console.log('🔄 REDIRECT_URI:', REDIRECT_URI || '❌ Not set');

// Step 0: Root route (optional)
app.get('/', (req, res) => {
  res.send('🎵 RetroBeats Spotify backend is live.');
});

// Step 1: Redirect user to Spotify Auth
app.get('/login', (req, res) => {
  if (!CLIENT_ID || !REDIRECT_URI) {
    return res.status(500).send('Missing CLIENT_ID or REDIRECT_URI in server config.');
  }

  const scope = [
    'user-read-private',
    'user-read-email',
    'streaming',
    'user-read-playback-state',
    'user-modify-playback-state'
  ].join(' ');

  const queryParams = querystring.stringify({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope
  });

  const loginURL = `https://accounts.spotify.com/authorize?${queryParams}`;
  console.log('🔗 Redirecting to Spotify Login:', loginURL);

  res.redirect(loginURL);
});

// Step 2: Handle callback and exchange code for tokens
app.get('/callback', async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('Missing code in callback.');
  }

  try {
    const tokenResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')
        }
      }
    );

    const { access_token, refresh_token, expires_in } = tokenResponse.data;

    console.log('✅ Access Token Received:', access_token ? '✅' : '❌ None');
    res.redirect(
      `http://localhost:3000/callback?access_token=${access_token}&refresh_token=${refresh_token}&expires_in=${expires_in}`
    );
  } catch (error) {
    console.error('❌ Error exchanging code for token:', error.response?.data || error.message);
    res.status(500).send('Authentication failed. Check console for details.');
  }
});

// Launch server
app.listen(PORT, () => {
  console.log(`🚀 Spotify backend running at http://localhost:${PORT}`);
});
