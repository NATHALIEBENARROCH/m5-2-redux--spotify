const initialState = {
  currentArtist: null,
  status: "idle",
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ARTIST_DETAILS':
      return {
        ...state,
        status: "loading"
      }
     case "RECEIVE_ARTIST_DETAILS":
       return {
         ...state,
         status: "idle",
         currentArtist: action.artist
       } 
     case "RECEIVE_ARTIST_DETAILS_ERROR":
       return {
         ...state,
         status: "error"
       }
    default: {
      return state;
    }
  }
}
