"use strict";
// server.js
// where your node app starts
Object.defineProperty(exports, "__esModule", { value: true });
// init project
require('dotenv').config();
const express = require("express");
const app = express();
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
// your first API endpoint...
app.get('/api/hello', (req, res) => {
    res.json({ greeting: 'hello API' });
});
// listen for requests :)
// import { AddressInfo } from 'net';
// const listener = app.listen(process.env.PORT, () => {
//     const { port } = listener.address() as AddressInfo;
//     console.log('Your app is listening on port ' + port);
// });
const devPort = 3000;
app.listen(devPort, () => {
    console.log('Your app is listening on port ' + devPort);
});
//# sourceMappingURL=server.js.map