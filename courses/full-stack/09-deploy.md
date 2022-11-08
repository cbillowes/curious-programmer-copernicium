---
title: Deployment
parent: /courses/full-stack
date: 2022-11-08
abstract: You will ...
---

## Objectives

1. ...

## Serve web app via Express

Make modern JavaScript files browser friendly by building your app into
a servable thing. You will need to copy this set of files across to the
server so that Express can serve your files instead of the React
development server.

```bash:title=>./web
npm run build; mv build ../server
```

```text:./.gitignore
build/
```

```js:title=./server/src/server.js
import path from 'path';
const __cwd = process.cwd();

app.use(express.static(path.join(__cwd, 'build')));
```

Serve your React app

```js:title=./server/src/server.js
app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(__cwd, '../build/index.html'));
});
```

## MongoDB

### Create a cluster

- Register for free at [Mongo Atlas][mongo-atlas]
- Build a database by creating a shared cluster (this should be free)
- Select a cluster of your choice, generally the one closest to your users geographically
- Add a non-standard username and password (this is for your cluster which will
  be applicable to all your databases in this cluster)
  Keep these values for the next step (you can just paste the text into your server
  `.env` file as that is where we will be use it)

### Connect your application

- Go to Deployment > Database > click on the Connect button on your Cluster
- For now you can allow access from anywhere
- Click on Choose a connection method
- Connect your application
- Copy the database URL and update your `MONGODB_URL` var in `./env` for your server
- Update the URL with your username and password to reflect the account you created in the previous step
- You can click on Close
- Restart nodemon by typing in `rs` into the terminal to see if the connection works

```text:title=./server/.env
MONGODB_URL="mongodb+srv://<username>:<password>@cluster.something.mongodb.net/?retryWrites=true&w=majority"
```

### Create your collection

- Go to Deployment > Database > Overview > click on the Connect button on your cluster
- Select the Connect with the MongoDB Shell option (you've already installed this so go to step 2)
- Enter the following commands:

```bash:title=mongosh
use stargazers-db
```

Populate some values.

```bash:title=mongosh
db.reviews.insertMany([
  {
    "slug": "bullies-social",
    "title": "Bullies Social",
    "abstract": "Bullies Social is where we encourage you to “B Social”! Come and socialize, talk and network."
  },
  {
    "slug": "cocoloko",
    "title": "Cocoloko",
    "abstract": "Located in a tropical garden in the heart of Grand Bay, the Cocoloko restaurant invites you to discover its world cuisine, as well as its famous cocktails in an exotic, relaxed setting, in the shade of coconut trees.",
  },
  {
    "slug": "island-babe",
    "title": "Island Babe",
    "abstract": "Island Babe Healthy food is Your favorite healthy daily hotspot situated at Pereybere, Mauritius.",
  },
  {
    "slug": "moods-skybar",
    "title": "Moods Skybar by Azur Paradise",
    "abstract": "Your truly unique Rooftop Experience! Moods Skybar prides itself with a panoramic view overseeing the Bay of Grand Baie. Situated within 5 minutes to major attractions, shopping centres, clinics, night clubs."
  },
  {
    "slug": "the-tavern",
    "title": "The Tavern",
    "abstract": "A traditional pub,  The Tavern already has a great reputation for first-class service, exceptional food and drink. A Superb atmosphere for a relaxed drink at the bar, and fabulous pub grub.",
  }
])
```

[mongo-atlas]: https://www.mongodb.com/atlas/database
