# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [code](https://github.com/ninaokumura/interactive-card-details)
- Live Site URL: [demo](hhttps://ninaokumura.github.io/interactive-card-details/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwindcss](https://tailwindcss.com/docs/installation) For styles
- [react-hook-form](https://react-hook-form.com/) - To handle form state
- [Yup](https://www.npmjs.com/package/yup) - To validate the form

### What I learned

- Work with forms: integrate react-hook-form with Yup to add schema validations
- Use onKeyDown event to prevent invalid characters on the input
- Set up the project to be hosted on gh-pages

### Useful resources

- [React forms tutorial by PedroTech](https://www.youtube.com/watch?v=UvH70UkbyfE&t=613s) - This helped me understand how to implement form validations and functionality using react-hook-form and Yup.
