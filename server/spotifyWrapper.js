var SpotifyWebApi = require('spotify-web-api-node');
var client_id = '62087936f8af4520a95144a63722061d';
var redirect_uri = 'http://localhost:5005/api/fetchSpotify';
const client_secret = "c0846a6985c74c2bbfd4ed35ef49ae15"

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: redirect_uri
});

module.exports = spotifyApi