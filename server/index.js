const express = require('express');

const app = express()

const server = require('http').Server(app)
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const spotifyRoutes = require("./routes/spotifyRoutes")
const dotenv = require('dotenv');

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PATCH',
      'DELETE'
    ],
  
    allowedHeaders: [
      'Content-Type'
    ]
  };
  dotenv.config();
app.use(bodyParser.json());
app.use(cors(corsOpts));

// mongo db connection
mongoose.connect(
"mongodb://localhost:27017",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (err) => {
      if (err) throw err;
      console.log('\x1b[106m\x1b[30m%s\x1b[0m', ' <<-- DB Connected Successfully -->> ');
    }
  );

app.use('/api', spotifyRoutes) 



server.listen(process.env.PORT || 5005, () => {
    console.log('\x1b[103m\x1b[30m%s\x1b[0m', ` <<<<<<<--- Listening to port ${process.env.PORT || 5005} --->>>>>>>`);
  });