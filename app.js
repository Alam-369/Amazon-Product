const express = require('express');
const session = require('express-session')
var assert = require('assert');
var bodyParser = require('body-parser');
const { debugPort } = require('process');
const { render } = require('ejs');
const { json } = require('body-parser');
const { captureRejectionSymbol } = require('events');
const { parse } = require('path');


const TWO_HOUR = 1000 * 60 * 60 * 2;
const {
    PORT = 3000,
    NODE_ENV = 'development',
    SESS_NAME = 'katha',
    SESS_SECRET = 'SECRET!!!!!!!',
    SESS_LIFETIME = TWO_HOUR



} = process.env
const IN_PROD = NODE_ENV === 'production'


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{

  res.render('index');
   
});

app.listen(3001);