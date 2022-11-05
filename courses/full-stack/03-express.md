---
title: Create backend with Express.js
parent: /courses/full-stack
date: 2022-11-03
modified: 2022-11-05
abstract:
  You will create a backend server with a dummy API that your frontend will connect to.
  You will create a test endpoint where your client says ping and the server says pong.
  You will then create an endpoint to rate reviews in-memory.
---

## Objectives

1. Create a backend server with a dummy API that your frontend will connect to.
1. Communicate between the server and client with a ping pong endpoint.
1. Create an API endpoint to rate reviews in-memory.
1. Test the endpoint using a tool like Postman.

## Restructure

Adding a server requires the addition of a new `npm` project with its own `package.json` file.
That means that you have to [move][mv-cmd] the web application into a directory of its own.

```bash:title=>./
mkdir -p web; mv * $_
```

Update `.gitignore` to exclude `node_modules/` (not the forward-slash is at the end).
This directory will now be excluded from anywhere within your project instead of just the root.

## Server

Create a `server` directory in the root of the project and initialize it as an npm project.
You will also create the server.js file.

```bash:title=>./
mkdir server
cd server
npm init -y
npm install express
mkdir src; touch src/server.js
```

### Modern JS

Configure to use modern JavaScript (such as `import` statements) by editing `package.json` and specifying `type`.

```json:title=./server/package.json
{
  "type": "module",
}
```

### :tennis: Ping pong

Create a new Express server listening on port 3000.
 In this basic endpoint example, `/ping` should respond with `"pong!"`.

```js:title=./server/src/server.js
import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
  res.send('pong!');
});

app.listen('3001', () => {
  console.log("Listening on http://localhost:3001")
})
```

### Run the server

Add the following script to your `package.json` file under scripts.

```json:title=./server/package.json
{
  "start": "node src/server.js"
}
```

And run the server using

```bash:title=>./server
npm start
```

### Automatic updating

Let's update the server to use `nodemon` so that we can avoid manually
restarting the server when changes are made.

```bash:title=>./server
npm install nodemon --save-dev
```

```json:title=./server/package.json
{
  "start": "nodemon src/server.js"
}
```

## Develop the API

```js:title=./server/src/server.js
import express from 'express';

// This in-memory structure be replaced by real database later on.
const inMemRatings = [
  { id: 1, rating: 0 },
  { id: 2, rating: 0 },
  { id: 3, rating: 0 },
];

const app = express();

// A built-in middleware function that parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

// A PUT verb on the following endpoint to update the rating and respond to the client accordingly.
app.put('/api/review/:slug/rate/:rating', (req, res) => {
  const { id, rating } = req.params;
  const item = inMemRatings.find((r) => r.id === parseInt(id, 10));
  if (item) {
    item.rating += parseFloat(rating);
    res.send(item);
  } else {
    res.send('Not Found');
  }
});
```

Test the `PUT` request in an API tester like Postman.

```text:title=endpoint
http://localhost:3001/api/review/1/rate/4
```

[mv-cmd]: https://stackoverflow.com/questions/547719/is-there-a-way-to-make-mv-create-the-directory-to-be-moved-to-if-it-doesnt-exis
