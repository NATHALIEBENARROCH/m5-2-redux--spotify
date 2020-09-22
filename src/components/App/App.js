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
    //
    dispatch(requestAccessToken());
    fetch("/spotify_access_token")
      .then((response) => response.json())
      .then((json) => {
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch((err) => {
        dispatch(receiveAccessTokenError());
      });
  }, []);
  return (
    <GlobalStyles>
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
      </BrowserRouter>
    </GlobalStyles>
  );
};

export default App;

const ByArtists = styled.div``;

const DefaultArtists = styled.div``;
