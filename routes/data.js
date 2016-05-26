var express = require('express');
var fs = require('fs');
var router = express.Router();

// TODO: Cache file data on first load
var readFile = function(fname) {
  return fs.readFileSync(fname, 'utf8', function(err, data) { return data; });
};

var fileName = 'resume.json';
var fetchData = function(key) {
  return JSON.parse(readFile(fileName))[key];
};

/* Activities */
router.get('/activities', function(req, res) {
  res.send(fetchData('activities'));
});

/* Contact */
router.get('/contact', function(req, res) {
  res.send(fetchData('contact'));
});

/* Education */
router.get('/education', function(req, res) {
  res.send(fetchData('education'));
});

/* Experience */
router.get('/experience', function(req, res) {
  res.send(fetchData('experience'));
});

/* Objective */
router.get('/objective', function(req, res) {
  res.send(fetchData('objective'));
});

/* Toolbox */
router.get('/toolbox', function(req, res) {
  res.send(fetchData('toolbox'));
});

/* All */
router.get('/', function(req, res) {
  res.send(JSON.parse(readFile(fileName)));
});

module.exports = router;