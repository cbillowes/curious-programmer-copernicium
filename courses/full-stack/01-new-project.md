---
title: Create a new React web application
parent: /courses/full-stack
date: 2022-11-02
modified: 2022-11-05
abstract:
  You will create a skeleton React web application in this chapter.
  This prepares you for the stargazers review web app that you will be building.
---

## Objectives

1. Create your React web application.
1. Create the basic pages and components you will need.

## Project

You can either use CRA or create the application from the [ground up][sans-cra].

> According to Facebook, CRA was not created for production but rather created for
> beginners so that developers didn't have to learn React and Webpack at the same time.
> CRA lacks flexibility as it is hard to configure, customize and strip out unnecessary dependencies.

```bash:title=bash
npx create-react-app stargazers
cd stargazers
```

## Git

Don't forget to init your Git repository so that you can push to your favorite hosted Git service like
GitHub, GitLab or BitBucket.

```bash:title=bash
git init
git add .
git commit -m "Initial commit"
```

> ## Quick test
>
> You should see a slow spinning React logo when the page loads on http://localhost:3000 when you start the app.
>
> ```bash:title=bash
> npm run start
> ```

## Structure

Create your directory structure so that we have pages and components to work on.

```bash:title=bash
mkdir src/pages && touch src/pages/Home.js src/pages/Register.js src/pages/Login.js src/pages/Review.js src/pages/NotFound.js
mkdir src/components && touch src/components/Layout.js
```

More pages and components to come later on.

### Layout

Edit your `Layout` component with some skeleton markup.

```jsx:title=./src/components/Layout.js
const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
```

## Pages

Edit your page components to look like the page below but update the component name and children inside the Layout component to
reflect the name of the page you are editing. Example `HomePage` and `Home page` become `LoginPage` and `Login page` respectively.

```jsx:title=./src/components/Home.js
const HomePage = () => {
  return <div>Home page</div>;
};

export default HomePage;
```

## App

Edit the component that mounts into your application.
Import the `Layout` component and use it with some dummy text for the time being.

```jsx:title=./src/App.js
import Layout from './components/Layout';

function App() {
  return <Layout>Something great is about to happen!</Layout>;
}

export default App;
```

## References

- [How to create a React app without using create-react-app][sans-cra] - Dev.to

[sans-cra]: https://dev.to/ivadyhabimana/how-to-create-a-react-app-without-using-create-react-app-a-step-by-step-guide-30nl
