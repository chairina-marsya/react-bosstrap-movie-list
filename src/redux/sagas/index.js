import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  setTopTrack, GET_TOPTRACK,
  setTopArtist, GET_TOPARTIST,
  setbyCountry, GET_BYCOUNTRY,
  setbySongs, GET_BYSONGS,
  setbyArtist, GET_BYARTIST,
} from '../reducers/index';

const API_ATTR = 'api_key=f5f49cb6605d4733ae38b309c8a15b9d&format=json';

/** request */
export function requestGetTopTrack() {
  return axios.request({
    method: 'get',
    url: `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&${API_ATTR}`,
  });
}
export function requestGetTopArtist() {
  return axios.request({
    method: 'get',
    url: `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&${API_ATTR}`,
  });
}
export function requestGetByCountry() {
  return axios.request({
    method: 'get',
    url: `https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=indonesia&${API_ATTR}`,
  });
}
export function requestGetBySongs(data) {
  return axios.request({
    method: 'get',
    url: `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${data}&${API_ATTR}`,
  });
}
export function requestGetByArtist(data) {
  return axios.request({
    method: 'get',
    url: `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${data}&${API_ATTR}`,
  });
}


export function* handleGetTopTrack() {
  try {
    const response = yield call(requestGetTopTrack);
    const { data } = response;
    yield put(setTopTrack(data.tracks.track));
  } catch (error) {
    yield put(setTopTrack([]));
  }
}

export function* handleGetTopArtist() {
  try {
    const response = yield call(requestGetTopArtist);
    yield put(setTopArtist(response.data.artists.artist));
  } catch (error) {
    yield put(setTopArtist([]));
  }
}

export function* handleGetByCountryt() {
  try {
    const response = yield call(requestGetByCountry);
    yield put(setbyCountry(response.data.tracks.track));
  } catch (error) {
    yield put(setbyCountry([]));
  }
}

export function* handleGetBySongs(data) {
  try {
    const response = yield call(requestGetBySongs, data.data);
    yield put(setbySongs(response.data.results.trackmatches.track));
  } catch (error) {
    yield put(setbySongs([]));
  }
}

export function* handleGetByArtist(data) {
  try {
    const response = yield call(requestGetByArtist, data.data);
    yield put(setbyArtist(response.data.results.artistmatches.artist));
    console.log(response.data.results.artistmatches.artist);
  } catch (error) {
    yield put(setbyArtist([]));
  }
}

export function* watcherSaga() {
  yield takeLatest(GET_TOPTRACK, handleGetTopTrack);
  yield takeLatest(GET_TOPARTIST, handleGetTopArtist);
  yield takeLatest(GET_BYCOUNTRY, handleGetByCountryt);
  yield takeLatest(GET_BYSONGS, handleGetBySongs);
  yield takeLatest(GET_BYARTIST, handleGetByArtist);
}
