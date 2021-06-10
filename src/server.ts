// server.js
// where your node app starts

// init project
require('dotenv').config();
import express = require('express');
const app = express();
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
import cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', (req, res) => {
    // next line needed to remove dist/ folder from the URL
    const localfolder = __dirname.slice(0, __dirname.length - 5);
    res.sendFile(localfolder + '/views/index.html');
});


// your first API endpoint...
app.get('/api/whoami', (req, res) => {
    res.json({
        language: req.headers['accept-language'],
        ipaddress: req.ip,
        software: req.headers['user-agent'],
    });
});


// listen for requests :)
import { AddressInfo } from 'net';
const listener = app.listen(process.env.PORT, () => {
    const { port } = listener.address() as AddressInfo;
    console.log('Your app is listening on port ' + port);
});

// const devPort = 3000;
// app.listen(devPort, () => {
//     console.log('Your app is listening on port ' + devPort);
// });
