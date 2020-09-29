import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { requestArtistDetails, receiveArtistDetails, receiveArtistDetailsError} from '../../action'
import { useSelector , useDispatch} from "react-redux";
import { fetchArtistProfile } from "../../helpers/api-helpers.js";

const ArtistRoute = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.token);
  const data = useSelector((state) => state.artists.currentArtist)
  const params = useParams();
  const artistId = "3aEHKmYKru5l6OkG9IOIPb";

  React.useEffect(() => {
    
    if(accessToken) {
      dispatch(requestArtistDetails())
      fetchArtistProfile(accessToken, params.id).then((data) => {
        console.log(data)
        dispatch(receiveArtistDetails(data))
        
      }).catch(() => dispatch(receiveArtistDetailsError()));
    }

 
  }, [accessToken]);

  if (!data) {
    return <>not data yet</>
  }
  return (
    <>
      <div>{data.name}</div>
      <img src={data.images[0].url}></img>
    </>
  );
};

export default ArtistRoute;
