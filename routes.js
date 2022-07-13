
//import { signup, login, isAuth } from './auth';
//import { mysql } from 'mysql2';
//import bodyParser from 'body-parser';
//import express from 'express';
//const fs = require('fs');

/*
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require ('mysql2');
const cors = require("cors");

  const con = mysql.createConnection({
  host     : 'sql4.freemysqlhosting.net', 
  user     : 'sql4490489',     // Your database's username.
  password : 'KfpFqhPDEs',        // Your database's password.
  database : 'sql4490489',   // Your database's name.
  port: 3306
  });

  const app = express();
  const router = express.Router();

  app.get('/pupil', function (req, res) {

    res.json({ message: "Routes.js in browser on port 3000" });
      connection.getConnection((err, connection) => {
          const con = mysql.createConnection({
            host: 'sql4.freemysqlhosting.net',
            user: 'sql4490489',
            password: 'KfpFqhPDEs',
            database: 'sql4490489',
            port: 3306
          });
          connection.connect();
          connection.query('SELECT * FROM pupil;', function (error, results, fields) {
            if (error)
              throw error;
              else console.log(results);
            res.send(results);
          });
        });
  });

  app.listen(3000, () => {
    console.log('server running on port 3000');
   console.log('Go to http://localhost:3000/pupil so you can see the data.');
  });
  /*

const router = express.Router();
router.post('/login', login);
router.post('/signup', signup);
router.get('/public/pupil', (req, res, next) => {
    res.status(200).json({ message: "here is your pupil resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

export default router;

/*

const app = express();
app.get('/pupil', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM pupil', function (error, results, fields) {
      if (error) throw error;
      else console.log(results);
      res.send(results);
    });
  });
});

app.listen(3000, () => {
 console.log('Go to http://localhost:3000/pupil so you can see the data.');
 
});

/*
test();{
    fetch('http://192.168.1.3:3000/pupil')
      .then(response => response.json())
      .then(users => console.warn(users))
  }

*/
