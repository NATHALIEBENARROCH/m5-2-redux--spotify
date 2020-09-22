import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchArtistProfile } from "../../helpers/api-helpers.js";
const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  const params = useParams();
  const artistId = "3aEHKmYKru5l6OkG9IOIPb";

  fetchArtistProfile(accessToken, artistId);

  return <div>{params.id}</div>;
};

export default ArtistRoute;
