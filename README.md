# Recipe App

## Objective

- Build a Task Tracker App using ReactJS.

## Description

- Project aims to create a Recipe App.
- In this project i tried to make a recipe app. After submitting username and password info's user can search food's recipe by their name and type.
- When user click the "view more" buttton in the cards div, can see the recipe and other informations about selected food.

## Project Link

#### You can reach my project from [here](https://recipe-app-router.vercel.app/) 👈

## Project Skeleton

```
Recipe App (folder)
|
|----readme.md
├── public
│     └── index.html
├── src
│    ├── components
│    │       ├── footer
│    │       │     ├── Footer.jsx
│    │       |     ├── Footer.styled.jsx
│    │       ├── header
│    │       │     ├── Header.jsx
│    │       │     ├── Card.jsx
│    │       │     └── Header.styled.jsx
│    │       │     └── Card.styled.jsx
│    │       └── navbar
│    │             ├── Navbar.js
│    │             └── Navbar.styled.jsx
│    ├── pages
│    │       ├── about
│    │       │     ├── About.js
│    │       │     ├── About.styled.jsx
│    │       ├── details
│    │       │     ├── Details.js
│    │       │     ├── Details.styled.jsx
│    │       ├── login
│    │       │     ├── Login.js
│    │       │     ├── Login.styled.jsx
│    │       ├── home
│    │       │     ├── home.js
│    │       │     ├── home.styled.jsx
│    │       └── notfound
│    │             ├── notfound.js
│    │             └── notfound.styled.jsx
│    ├── router
│    │       └── AppRouter.js
│    │       └── PrivateRouter.js
│    ├── assets
│    │       └── [images]
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```

### At the end of the project, following topics are to be covered;

- HTML
- CSS
- JS
- ReactJS
- Styled Components
- Material-UI

### Installation

To run this project;

- Signup `https://developer.edamam.com/edamam-docs-recipe-api` and get api key and id.
- Create a .env file and set your REACT_APP_API_KEY and REACT_APP_API_ID:
- After these you can run the project as usual =>

```
$ git clone https://github.com/esadakman/recipe-app
$ cd ../recipe-app
$ npm install / yarn
$ npm start / yarn start
```

### Preview of the Project

![recipe](https://user-images.githubusercontent.com/98649983/178786899-5a3123cb-845d-432e-8374-fe3ea5b29ccd.gif)
