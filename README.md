# Checkout Flow Test Task

## Requirements
*node >= 16 (stable version)*

---
## How to set environment variables
All environment variables which are used in
the project are listed in the `.env.sample` file.

Create a `.env` file in the root directory
of your application and add the variables to
the file (like in `.env.sample` file).

*note:*
>All environment variables have `REACT_APP_` prefixes, 
any other variables will be ignored to avoid accidentally
exposing a private key on the machine that could have the
same name.

---
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
