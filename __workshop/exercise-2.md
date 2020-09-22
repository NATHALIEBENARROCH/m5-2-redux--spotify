# Exercise 2: Understanding the initial state of the workshop

Inside `/workshop`, you'll see that we have a typical boilerplate setup for a React application.

We also have a `server` folder.

We need a Node server for 1 very specific reason: to generate access tokens for the Spotify API.

Here's how authentication works:

1. You sign up for a Client ID and API secret from Spotify (✔ we did this already)
2. Whenever the user loads our app, we'll want to use the Client ID and API secret to generate an "access token".
3. We'll use that access token to prove to Spotify that we are allowed to access certain resources.

> _Why can't we send the API secret directly to Spotify?_ It might be confusing why we have to do this big dance. Why can't we use the API secret directly with Spotify?
>
> This is a security precaution. We cannot store the API Secret on the client, because nothing is secret on the client. The server can hold secret data, so it owns the API Secret, but the client at no point knows what the secret is. Bad actors (hackers) will have a much more difficult time accessing our secret on the server.
>
> The client is aware of the _access token_. An access token has a very short lifespan: it only lasts 1 hour. So if a bad actor is somehow able to procure an access token, they won't be able to take much advantage of it.

### Running

You can run both the client and the server by running `yarn start` inside the `workshop` directory.

The design for this project lives on Figma. You can access it here:
https://www.figma.com/file/VAYO9Ezmxx4fMR29Sgylck/Spotify-App

(You'll need to create a free account to be able to interact with the design.)

### Setup

We have a few small tasks to do to finish setting up the initial project.

### Add Google Fonts

This project uses Montserrat, font weights 400, 600, and 800.

Go to https://fonts.google.com/ and get an embed snippet for this font. Add it to your page.

_HINT:_ should be a `<link>` tag. You'll want to copy/paste the snippet they give you into `public/index.html`

### Set up the proxy

We have a server-side component, and we need to proxy requests on the front-end.

Add this line to your `package.json`:

```
"proxy": "http://localhost:5678",
```

### CSS Reset

Create a new component, `GlobalStyles`, and add in some global styles using styled-components `createGlobalStyles`.

Up to you exactly what you'd like to add, but it's recommended that you add at least this:

```css
html,
body,
div,
span {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, sans-serif;
}
```

Render the `GlobalStyles` component in `src/App`.
