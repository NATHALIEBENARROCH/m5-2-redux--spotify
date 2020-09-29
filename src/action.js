export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const requestArtistDetails = () => ({
  type: "REQUEST_ARTIST_DETAILS",
});

export const receiveArtistDetails = (artist) => ({
  type: "RECEIVE_ARTIST_DETAILS",
  artist,
});

export const receiveArtistDetailsError = (error) => ({
  type: "RECEIVE_ARTIST_DETAILS_ERROR",
  error,
});
