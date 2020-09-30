import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GlobalStyles from "../../GlobalStyles.js";
import { Provider } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ArtistRoute from "../ArtistRoute/ArtistRoute.js";

import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "../../action.js";

const DEFAULT_ARTIST_ID = "3aEHKmYKru5l6OkG9IOIPb";
const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
  console.log("in use effect")
    dispatch(requestAccessToken());
    fetch("http://localhost:5678/spotify_access_token")
    // without this is fetches at local host 3000!
    // see console
      .then((response) => response.json())
      .then((json) => {
        console.log(json.access_token)
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch((err) => {
        dispatch(receiveAccessTokenError());
      });
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/artists/:id">
            <ArtistRoute />
          </Route>
          <Route exact path="/">
            <Redirect to={`/artists/${DEFAULT_ARTIST_ID}`} />
          </Route>
        </Switch>
      </div>
      <GlobalStyles />
    </BrowserRouter>
  );
};

//curson on selection then  option up arrow
export default App;


