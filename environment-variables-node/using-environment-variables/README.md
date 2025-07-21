<h1>
  <span class="headline">Environment Variables - Node</span>
  <span class="subhead">Using Environment Variables</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to use and protect `.env` files in a Node application.

## Introduction to dotenv

Start here if you want to implement environment variables in an existing Node app!

[Dotenv](https://www.npmjs.com/package/dotenv) is a popular Node module that loads environment variables from a `.env` file.

### Installing dotenv

First, we need to add `dotenv` to our project:

```bash
npm i dotenv
```

### Importing dotenv

Next, to use it, we'll need to import the module. Add this line ***at the very top*** of `server.js`:

```javascript
require('dotenv').config();
```

### Creating a `.env` file

Finally, create a `.env` file in your project's ***root directory***.

```bash
touch .env
```

The `dotenv` package attempts to use `.env` files in the root directory by default.

Inside this `.env`, define your variables as KEY=value pairs. By convention, environment variable keys are written in all caps, with underscores separating multiple words. This helps to differentiate them from other variables.

> 🧠 The below environment variable is just for demo purposes. Other applications will have different environment variables specific to the app's functionality.

Enter the following in your `.env` file:

```plaintext
SECRET_PASSWORD=1234
```

> 🚨 `.env` files are ***not JavaScript files***. They are a set of KEY=value pairs where every value is treated as a string. Do not use quotes around the values. Do not use `let` or `const` when defining the keys. You will never add any spaces in these files.

### Accessing environment variables

The `dotenv` package attaches all the properties that match the keys in our `.env` file to the `process.env` object. For example, the `SECRET_PASSWORD` environment variable we defined above will be accessible at `process.env.SECRET_PASSWORD`.

Let's access it within our code:

```javascript
require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running!');
});

// adjust the following:
app.listen(port, () => {
  console.log('Listening on port 3000');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});
```

### Run the server

Run `nodemon`, and check out your terminal. You should see the following:

```plaintext
Listening on port 3000
Your secret is 1234
```

You might be thinking, "Hold on, if most servers are using `.env` files, couldn't a bad actor just `console.log()` `process.env` in the browser and steal secrets that way?"

Thankfully, no - because we're storing secrets on the server, the browser can't access them. Try to `console.log()` `process.env` in the browser, and you'll get a reference error - it has no idea what `process` is! As long as your secrets are in a `.env` file on the server side, they're safe!

## Protecting secrets with `.gitignore`

At this stage, our secrets would still be visible if we pushed our code up to GitHub. They've just been moved into a different file. This is where `.gitignore` comes into play!

A [`.gitignore`](https://git-scm.com/docs/gitignore) file specifies intentionally untracked files to ignore. When we include the string `.env` in a `.gitignore`, we tell Git to ignore this file whenever we add, commit, and push code to GitHub.

```bash
touch .gitignore
```

In `.gitignore`, add the following:

```plaintext
.env
```

Go ahead and `add`, `commit`, and `push` your code to GitHub. Once you're done, check the repo. You should see your server file but not the `.env`.

Anyone cloning our code must create their own `.env` with a `SECRET_PASSWORD` value. This approach ensures that sensitive information remains secure and our local secrets are safe!

This also highlights the uniqueness of different environments, as we discussed earlier. No matter where our code runs, there should be a `SECRET_PASSWORD` environment variable, but the value of that environment variable may vary depending on the environment configuration.

## Deployment considerations

When deploying your Node app (for example, to Heroku), remember to set the same environment variables in your deployment environment. The values might differ from your local development environment.
