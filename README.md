# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

![Design preview for the Expenses chart component coding challenge](./design/desktop-preview.jpg)

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![Dektop](./screenshots/desktop-view.png) 
![Mobile](./screenshots/mobile-view.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile compatibility with Media Queries
- JavaScript ES6 for functionality

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

Better know of pseudo classes:
```css
::after
```

Create async function to fetch data from .json file & and use this data for my whole script:
```js
async function getData() {

  const API_URL = './data.json';
  fetch(API_URL)
    .then(response => response.json())
    .then(data => setData(data));

}
```

## Author

- Website - [Malzagic](https://github.com/Malzagic)
- Frontend Mentor - [@malzagic](https://www.frontendmentor.io/profile/Malzagic)
