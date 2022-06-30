/* eslint-disable default-param-last */
export const GET_TOPTRACK = 'GET_TOPTRACK';
const SET_TOPTRACK = 'SET_TOPTRACK';
export const GET_TOPARTIST = 'GET_TOPARTIST';
const SET_TOPARTIST = 'SET_TOPARTIST';
export const GET_BYCOUNTRY = 'GET_BYCOUNTRY';
const SET_BYCOUNTRY = 'SET_BYCOUNTRY';
export const GET_BYSONGS = 'GET_BYSONGS';
const SET_BYSONGS = 'SET_BYSONGS';
export const GET_BYARTIST = 'GET_BYARTIST';
const SET_BYARTIST = 'SET_BYARTIST';

export const getTopTrack = () => ({
  type: GET_TOPTRACK,
});

export const setTopTrack = (topTrack) => ({
  type: SET_TOPTRACK,
  topTrack,
});

export const getTopArtist = () => ({
  type: GET_TOPARTIST,
});

export const setTopArtist = (topArtist) => ({
  type: SET_TOPARTIST,
  topArtist,
});

export const getbyCountry = () => ({
  type: GET_BYCOUNTRY,
});

export const setbyCountry = (byCountry) => ({
  type: SET_BYCOUNTRY,
  byCountry,
});

export const getbySongs = (data) => ({
  type: GET_BYSONGS,
  data,
});

export const setbySongs = (bySongs) => ({
  type: SET_BYSONGS,
  bySongs,
});

export const getbyArtist = (data) => ({
  type: GET_BYARTIST,
  data,
});

export const setbyArtist = (byArtist) => ({
  type: SET_BYARTIST,
  byArtist,
});

const initialState = {
  topTrack: [],
  topArtist: [],
  byCountry: [],
  bySongs: [],
  byArtist: [],
};

export default (state = initialState, action) => {
  const { topTrack, topArtist, byCountry, bySongs, byArtist} = action;
  switch (action.type) {
    case SET_TOPTRACK:
      return { ...state, topTrack };
    case SET_TOPARTIST:
      return { ...state, topArtist };
    case SET_BYCOUNTRY:
      return { ...state, byCountry };
    case SET_BYSONGS:
      return { ...state, bySongs };
    case SET_BYARTIST:
      return { ...state, byArtist };
    default:
      return state;
  }
};
