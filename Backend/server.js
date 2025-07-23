const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'receiver')));
app.listen(5502, () => console.log('📦 Receiver running on http://44.203.253.121:8168'));