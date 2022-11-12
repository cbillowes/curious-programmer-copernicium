---
title: Connect the backend to the frontend
parent: /courses/full-stack
date: 2022-11-03
modified: 2022-11-05
abstract: You will create requests from the frontend to your backend server API.
  You will overcome Cross Origin Resource Sharing issues by whitelisting the client's
  server and port in your Express server.
---

## Objectives

1. Whitelist http://localhost:3000 in your Express server.
1. Remove in-memory data to replace with database functionality.
1. Update pages interact with the API and render the results on screen.

## CORS

The backend and frontend are running on different ports -
3001 and 3000 respectively. A Cross Origin Resource Sharing [CORS][cors]
network error will occur on requests made to the API from the frontend.

Install the [cors][install] npm package in the server directory
so that you can enable CORS on the express server.

```bash:title=>./
cd server
npm install cors
cd ../
```

```js:title=./server/src/server.js
import express from 'express';
import cors from 'cors';
import { withCollection } from './db.js';

const app = express();
// The endpoint will later be configurable.
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

// ...
```

## Remove in-memory

Remove the in memory data file.

```bash:title=>./
rm -rf web/src/data/reviews.json
```

## Interact with the API

Render each company review on the Home Page by iterating through the reviews array
returned from the get request made by `axios` in the `fetch` function in the `useEffect`.

If there are no reviews, text is rendered to say that there is nothing.

```jsx:title=./web/src/pages/Home.js
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`http://localhost:3001/api/reviews`);
      setReviews(response.data);
    };
    fetch();
  }, []);

  if (reviews && reviews.length === 0) {
    return <div>No results</div>;
  }

  return reviews.map(({ slug, title, abstract, rating }) => {
    return (
      <div key={slug}>
        <h1>
          <Link to={`/review/${slug}`}>{title}</Link>
          {rating && <span>⭐ {rating}</span>}
        </h1>
        <p>{abstract}</p>
      </div>
    );
  });
};

export default HomePage;
```

Create the following components to be rendered on your Review page.

```bash:title=>./web/src/components
touch Controls.js Rating.js Comments.js Comment.js
```

Import the `forwardRef` function from React.
Use this technique for automatically passing a ref through a component to one of its children.
See more information [here][forward-refs].

```jsx:title=./web/src/components/Controls.js
import { forwardRef } from 'react';
```

Create the following named reusable control components.

```jsx:title=./web/src/components/Controls.js
const Form = ({ title, children }) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
};

const Label = ({ label, children, isRequired }) => {
  return (
    <label>
      {label}
      {isRequired ? (
        <span>
          Required
        </span>
      ) : (
        <></>
      )}
      {children}
    </label>
  );
};

const TextBox = forwardRef(
  ({ label, isRequired, type, placeholder, ...rest }, ref) => {
    return (
      <Label label={label} isRequired={isRequired}>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          {...rest}
        />
      </Label>
    );
  },
);

const TextArea = forwardRef(
  ({ label, isRequired, placeholder, rows, ...rest }, ref) => {
    console.log(ref);
    return (
      <Label label={label} isRequired={isRequired}>
        <textarea
          ref={ref}
          placeholder={placeholder}
          rows={rows}
          required={isRequired}
          {...rest}
        ></textarea>
      </Label>
    );
  },
);

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Form, Label, TextBox, TextArea, Button };
```

Create the component that will handle the rating stars.

```jsx:title=./web/src/components/Rating.js
import { useRef, useState } from 'react';
import { Form } from './Controls';

const getFillClassName = (isHover, isActive) => {
  if (isHover) {
    return `hover`;
  }
  if (isActive) {
    return `active`;
  }
  return `empty`;
};

const LeftStar = ({ value, isHover, isActive, onHover, onRated }) => {
  const leftStar = useRef();
  const fillClassName = getFillClassName(isHover, isActive);
  return (
    <path
      ref={leftStar}
      className={fillClassName}
      d="M256.024,391.104L97.4,512l60.592-195.608L0,196.032h195.264L256.024,0"
      onClick={() => onRated(value)}
      onMouseEnter={() => onHover(value)}
    />
  );
};

const RightStar = ({ value, isHover, isActive, onHover, onRated }) => {
  const rightStar = useRef();
  const fillClassName = getFillClassName(isHover, isActive);
  return (
    <path
      ref={rightStar}
      className={fillClassName}
      d="M414.616,512L256.024,391.104L97.4,512l60.592-195.608L0,196.032h195.264L256.024,0l60.736,196.032 H512l-157.968,120.36L414.616,512z"
      onClick={() => onRated(value)}
      onMouseEnter={() => onHover(value)}
    />
  );
};

const Stars = ({ size, value, stars, onRated }) => {
  const [hoverValue, onHover] = useState(0);
  const [hovering, toggleHovering] = useState(false);

  return (
    <div>
      {stars.map((rating) => {
        return (
          <div key={rating}>
            <svg
              height={size}
              width={size}
              viewBox="0 0 512 512"
              onMouseEnter={() => toggleHovering(true)}
              onMouseLeave={() => toggleHovering(false)}
            >
              <g>
                <RightStar
                  value={rating}
                  selected={value}
                  isActive={value >= rating}
                  isHover={hovering && hoverValue >= rating}
                  onHover={onHover}
                  onRated={onRated}
                />
                <LeftStar
                  value={rating - 0.5}
                  selected={value}
                  isActive={value >= rating - 0.5}
                  isHover={hovering && hoverValue >= rating - 0.5}
                  onHover={onHover}
                  onRated={onRated}
                />
              </g>
            </svg>
          </div>
        );
      })}
    </div>
  );
};

const Rating = ({ title, value, max, onRated }) => {
  const [rating, setRating] = useState(value || 0);
  const stars = Array.from(Array(max).keys()).map((i) => i + 1);

  const handleRated = (value) => {
    setRating(value);
    onRated && onRated(value);
  };

  const handleReset = () => {
    setRating(0);
    onRated && onRated(0);
  };

  return (
    <Form
      title={
        <span>
          {title}: <strong>{rating} ⭐</strong>
        </span>
      }
    >
      <Stars size="42" value={rating} stars={stars} onRated={handleRated} />
      <button
        onClick={handleReset}
      >
        reset my rating
      </button>
    </Form>
  );
};

export default Rating;
```

Create the component that will handle commenting on reviews.
Use `useRef` to create a reference of the element so that you can interact with it programmatically.

```jsx:title=./web/src/components/Comment.js
import { useRef } from 'react';
import { Button, Form, TextArea, TextBox } from './Controls';

const Comment = ({ commentOn, onSave }) => {
  const name = useRef();
  const email = useRef();
  const comment = useRef();

  const resetForm = () => {
    name.current.value = '';
    email.current.value = '';
    comment.current.value = '';
  };

  const handleSave = () => {
    onSave &&
      onSave({
        name: name.current.value,
        email: email.current.value,
        comment: comment.current.value,
      });
    resetForm();
  };

  return (
    <Form title={<span> What did you think? 💭</span>}>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextBox
          ref={email}
          label="Your email address"
          type="email"
          placeholder="For feedback only"
        />
        <TextBox
          ref={name}
          label="Your name"
          isRequired
          type="text"
          placeholder="Appears on your comment"
        />
        <TextArea
          ref={comment}
          label="Your comment"
          isRequired
          rows="10"
          placeholder={`Publicly share what you think about ${
            commentOn || 'this topic'
          }`}
        />
        <Button onClick={handleSave}>Save</Button>
      </form>
    </Form>
  );
};

export default Comment;
```

Create the listing for comments.

```jsx:title=./web/src/components/Comments.js
import { Form } from "./Controls";

const format = (timestamp) => {
  const dtFormat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'long',
    timeZone: 'UTC'
  });

  return dtFormat.format(new Date(timestamp));
}

const Comments = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>There are no comments yet</div>;
  }

  return data
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(({ name, comment, timestamp }, i) => {
      return (
        <Form title={format(timestamp)} key={i}>
          <blockquote>
            <div>{comment}</div>
            <cite>— {name}</cite>
          </blockquote>
        </Form>
      );
    });
};

export default Comments;
```

Lastly, the Review page

```jsx:title=./web/src/pages/Review.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Import axios to make the web requests.
import axios from 'axios';
import NotFoundPage from './NotFound';
import Comment from '../components/Comment';
import Comments from '../components/Comments';
import Rating from '../components/Rating';

const ReviewPage = () => {
  const { slug } = useParams();
  // You need to set the review in state once it is loaded from the API.
  const [review, setReview] = useState();

  // useEffect cannot be async so create an async
  // function within it to load the data.
  useEffect(() => {
    // Fetch the data from the API using axios.
    // This endpoint will later be configurable.
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/reviews/${slug}`,
      );
      setReview(response.data);
    };
    fetch();
    // This code will execute and rerender the component
    // every time slug's value will change.
  }, [slug]);

  if (review) {
    const { title, abstract, rating, comments } = review;
    return (
      <div>
        <h1>
          {title}
          {rating && <span>⭐ {rating}</span>}
        </h1>
        <div>{abstract}</div>
        <Rating
          title="Your rating"
          max={5}
          value={rating}
          onRated={async (rating) => {
            const result = await axios.put(
              `http://localhost:3001/api/review/${slug}/rate/${rating}`,
            );
            setReview(result.data);
          }}
        />
        <Comment
          commentOn={title}
          onSave={async (data) => {
            const result = await axios.post(
              `http://localhost:3001/api/review/${slug}/comment`,
              data,
            );
            setReview(result.data);
          }}
        />
        <Comments data={comments} />
      </div>
    );
  }

  return <NotFoundPage />;
};

export default ReviewPage;
```

[cors]: https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
[install]: https://www.npmjs.com/package/cors
[forward-refs]: https://reactjs.org/docs/forwarding-refs.html