const PORT = process.env.PORT || 8080;
const express = require("express");
const cors = require('cors');
const axios = require('axios').default;
require('dotenv').config();
const app = express();


app.use(cors());

app.get('/', (req, res) => {
    res.json('welcome to CREA TECH"s love api')
})

app.get('/results', (req, res) => {
  const group = req.query

  const options = {
    method: 'GET',
    url: process.env.URL,
    params: {fname: `${group.fname}`, sname: `${group.sname}`},
    headers: {
      'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
      'x-rapidapi-key': process.env.MyApi_is_Slick,
    }
  };
  
  axios.request(options).then((response) => {
    console.log(response.data)
    res.json(response.data);
  }).catch((error) => {
    if(error) throw 'the error is from axios' + error;
  });
})


app.listen(PORT, () => console.log(`server running at: http://localhost:${PORT}/results`));