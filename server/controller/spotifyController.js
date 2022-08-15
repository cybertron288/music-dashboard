const axios = require("axios");
var querystring = require('querystring');
const qs = require('qs');

const baseUrl = "https://api.spotify.com/v1"
var client_id = '62087936f8af4520a95144a63722061d';
var redirect_uri = 'http://localhost:5005/api/fetchSpotify';
const client_secret = "c0846a6985c74c2bbfd4ed35ef49ae15"
const auth_token = new Buffer.from(client_id + ':' + client_secret).toString('base64')

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {q: 'pines', type: 'multi', offset: '0', limit: '10', numberOfTopResults: '5'},
  headers: {
    'X-RapidAPI-Key': '5d1ca5498cmsh7728eb865e27fefp1ea806jsn208dcbfcd477',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

function generateRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


const getSpotify = () => {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

const spotifyLogin = (req, res)=>{
    var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
  querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
}

const authSpotify = async (req,res) => {
   
        console.error(req.query);
        const code = req.query.code || null;

        try{
            //make post request to SPOTIFY API for access token, sending relavent info
            const token_url = 'https://accounts.spotify.com/api/token';
            const data = qs.stringify({grant_type: 'authorization_code',code: code, redirect_uri: redirect_uri,});
        
            const response = await axios.post(token_url, data, {
              headers: { 
                'Authorization': `Basic ${auth_token}`,
                'Content-Type': 'application/x-www-form-urlencoded' 
              }
            })
            //return access token
            console.log(response.data)
            return response.data.access_token;
          }catch(error){
            //on fail, log the error in console
            console.log(error);
          }

}

const refreshToken = async(req, res) => {
    try{
        const refresh_token = req.query.refresh_token;
        //make post request to SPOTIFY API for access token, sending relavent info
        const token_url = 'https://accounts.spotify.com/api/token';
        const data = qs.stringify({'grant_type':'refresh_token', refresh_token: refresh_token});
    
        const response = await axios.post(token_url, data, {
          headers: { 
            'Authorization': `Basic ${auth_token}`,
            'Content-Type': 'application/x-www-form-urlencoded' 
          }
        })
        //return access token
        console.log("refershtoken", response.data)
        return response.data.access_token;
      }catch(error){
        //on fail, log the error in console
        console.log(error);
      }
}

module.exports = {
    getSpotify,
    spotifyLogin,
    authSpotify,
    refreshToken
}