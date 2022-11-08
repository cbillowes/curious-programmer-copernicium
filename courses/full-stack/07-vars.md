---
title: Configure environment variables for your application
parent: /courses/full-stack
date: 2022-11-04
modified: 2022-11-05
abstract:
  You are going to remove all hardcoded references in your web client and server API
  by introducing environment variables.
---

## Objectives

1. Create local/dev environment variable files for your web client and your server
1. Configure the variables you want to abstract so that they are no longer hardcoded
1. Use the variables instead of the hardcoded values in your code

## Create the files

Create an `.env` file for your server and for your web app.

```bash:title=>./
touch ./server/.env ./server/src/constants.js ./web/.env ./web/src/constants.js
```

You need to exclude it from Git because you are going to store sensitive information in there.

```text:title=./gitignore
.env
```

## Configure the values

Open the server file and paste the following values into your file.

```text:title=./server/.env
PORT="3001"
MONGODB_URL="mongodb://127.0.0.1:27017"
MONGODB_NAME="stargazers-db"
ENABLE_CORS_FOR_ORIGIN="http://localhost:3000"
```

Follow the same process with the web app.

```text:title=./web/.env
REACT_APP_API_ENDPOINT="http://localhost:3001"
```

## Use the variables

### On the server

Install the [dotenv][dotenv] npm package in the server.

```bash:title=>./server
npm install dotenv --save
```

Create an constants

```js:title=./server/src/constants.js
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_NAME = process.env.MONGODB_NAME;
const ENABLE_CORS_FOR_ORIGIN = process.env.ENABLE_CORS_FOR_ORIGIN;

export { PORT, MONGODB_URL, MONGODB_NAME, ENABLE_CORS_FOR_ORIGIN };
```

```js:title=./server/src/db.js
import { MONGODB_NAME, MONGODB_URL } from './constants.js';

const url = MONGODB_URL;
const dbName = MONGODB_NAME;
```

```js:title=./server/src/server.js
import { PORT, ENABLE_CORS_FOR_ORIGIN } from './constants.js';

const app = express();
app.use(
  cors({
    origin: ENABLE_CORS_FOR_ORIGIN,
  }),
);

// ...

app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);
  await openMongoDbConnection();
});
```

## On the web application

Create an constants

```js:title=./web/src/constants.js
import dotenv from 'dotenv';

dotenv.config();

const API_ENDPOINT = process.env.API_ENDPOINT;

export { API_ENDPOINT };
```

```js:title=./web/src/pages/Home.js
import { API_ENDPOINT } from '../constants';

const HomePage = () => {
// ...
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${API_ENDPOINT}/api/reviews`);
      setReviews(response.data);
    };
    fetch();
  }, []);
// ...
};
```

```js:title=./web/src/pages/Review.js
import { API_ENDPOINT } from '../constants';

const ReviewPage = () => {
  // ...
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${API_ENDPOINT}/api/reviews/${slug}`);
      setReview(response.data);
    };
    fetch();
  }, [slug]);

  if (review) {
    return (
      <div>
        <Rating
          onRated={async (rating) => {
            const result = await axios.put(
              `${API_ENDPOINT}/api/review/${slug}/rate/${rating}`,
            );
          }}
        />
        <Comment
          onSave={async (data) => {
            const result = await axios.post(
              `${API_ENDPOINT}/api/review/${slug}/comment`,
              data,
            );
          }}
        />
      </div>
    );
  }
};
```

[dotenv]: https://www.npmjs.com/package/dotenv
