# Stretch Goal 1: Top Tracks

Below the header, there are 3 play buttons for top tracks.

<img src="../__lecture/assets/top-tracks.png" alt="top tracks section" />

> **Critically, you are not expected to build the play buttons**. If you'd like, you can consider that a stretch-stretch goal, but you can use the NPM package `react-play-button` to accomplish this goal. You can learn more about that component and what props it accepts here: https://github.com/joshwcomeau/react-play-button. We'll outline it in depth below.

### Data fetching

Using the Spotify API, find the "Top Tracks" API endpoint. Create another helper in `api-helpers` to fetch the data from this endpoint. HINT: You need to specify a country in the query params. You can use US or CA.

Inside `ArtistRoute`, you have something like this:

```js
// ArtistRoute.js
const ArtistRoute = () => {
  const { artistId } = useParams();

  const accessToken = useSelector((state) => state.auth.token);
  const artist = useSelector((state) => state.artists.currentArtist);

  React.useEffect(() => {
    if (accessToken) {
      fetchArtistProfile(accessToken, artistId);
    }
  }, [accessToken]);

  if (!artist) {
    return "Loading…";
  }

  return; /* Whatever your UI is */
};
```

This presents an interesting challenge; we now have 2 different API endpoints to hit, and we don't know which order they'll complete in. We want to wait for _all data to be available_ before we show the profile page / remove the "Loading…" message.

> You might think it's better to render each section ASAP, but in practice, it can be a very jarring experience when different parts of a page keep popping in at different times. Better in this case to wait for both endpoints

In the lecture, we covered using `Promise.all` to wait for the result of multiple promises. Let's restructure our actions a bit so we have the following actions:

**requestAllArtistInfo**

This action will be dispatched before any requests are made, to switch the `status` to `loading`

**receiveArtistProfile**

This action will be dispatched when the original `/artist/:artistId` data is received

**receiveTopTracks**

This action will be dispatched when the top tracks are received

**finishReceivingAllArtistInfo**

This action will be dispatched when _both_ of the endpoints have resolved, and all the data is ready. This will switch the status from `loading` to `idle`, and show the UI to the user.

**receiveArtistInfoError**

If either of the requests fail, we should dispatch an error, which will show the user an error message

_HINT:_ You can assign promises to a variable, to use them with `Promise.all`. Eg. `const firstPromise = fetch(/* stuff */)`

### Rendering a Play button

First, the API might return multiple tracks. Let's limit it to the first 3.

For each one, render something like this:

```js
import PlayButton from "react-play-button";

<PlayButton
  url={track.preview_url}
  playIconColor={/* Find the value in Figma */}
  stopIconColor={/* Find the value in Figma */}
  idleBackgroundColor={/* Find the value in Figma */}
  progressCircleColor={/* Find the value in Figma */}
  progressCircleWidth={/* Find the value in Figma */}
/>;
```

You'll notice that it _doesn't work yet_. You need to tell the button whether it should be playing or not!

Think of it this way: when I click to play the first button, and then I click to play the second one, the first one should automatically stop. I don't want both buttons to play simultaneously:

<img src="../__lecture/assets/play-toggle.gif" alt="Toggling between play buttons" />

`PlayButton` gives you three properties you'll need to use:

- `active`
- `play`
- `stop`

You'll want to keep something in React state which keeps track of _which_ track is currently playing, if any. You can then pass a boolean to `active` (so if the first track is playing, the first button would get `true`, the other two would get `false`). You can use the `play` and `stop` buttons to set the state in response to user actions (so if the user clicks the "stop" button, it will call the `stop` function, which you can use to set state).
