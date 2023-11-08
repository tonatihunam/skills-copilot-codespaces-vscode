// Create web server application
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Create a middleware that parses JSON data
app.use(bodyParser.json());

// Create a middleware that parses urlencoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Create a middleware that logs the request URL, method, and current date
app.use((req, res, next) => {
  console.log(`URL: ${req.url}`);
  console.log(`Method: ${req.method}`);
  console.log(`Date: ${new Date()}`);
  next();
});

// Create a middleware that checks if the request body has a name property
app.use((req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).send('Bad Request');
  }
});

// Create a middleware that checks if the request body has a comment property
app.use((req, res, next) => {
  if (req.body.comment) {
    next();
  } else {
    res.status(400).send('Bad Request');
  }
});

// Create a middleware that checks if the request body has a rating property
app.use((req, res, next) => {
  if (req.body.rating) {
    next();
  } else {
    res.status(400).send('Bad Request');
  }
});

// Create a GET handler for the path '/comments'
app.get('/comments', (req, res) => {
  // Send a JSON response
  res.json(comments);
});

// Create a POST handler for the path '/comments'
app.post('/comments', (req, res) => {
  // Get the name, comment, and rating from the request body
  const { name, comment, rating } = req.body;

  // Create a new comment object
  const newComment = { name, comment, rating };

  // Add the new comment to the array
  comments.push(newComment);

  // Send a JSON response
  res.json(newComment);
});

// Create a PUT handler for the path '/comments'
app.put('/comments', (req, res) => {
  // Get the name, comment, and rating from the request body
  const { name, comment, rating } = req.body;

  // Create a new comment object
  const newComment = { name, comment, rating };

  // Add
