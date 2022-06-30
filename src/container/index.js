/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';

// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
import { Tabs, Tab, Container } from 'react-bootstrap';
import FullFeaturedCrudGrid from '../component/organism/SongsList';

export default function EnhancedTable() {
  // const dispatch = useDispatch();
  // const [songsPlaylist, setSongsPlaylist] = useState([]);
  // const [songsByTopTracks, setSongsByTopTracks] = useState({
  //   columns: [],
  //   rows: [],
  // });
  // const [songsByTopArtist, setSongsByTopArtist] = useState([{
  //   columns: [],
  //   rows: [],
  // }]);

  // useEffect(() => {
  //   dispatch(getTopTrack());
  //   dispatch(getTopArtist());
  //   dispatch(getbyCountry());
  // }, []);

  // const topTracks = useSelector((state) => state.chart.topTrack);
  // const topArtist = useSelector((state) => state.chart.topArtist);
  // const chartByCountry = useSelector((state) => state.chart.byCountry);
  // const filteredBySongs = useSelector((state) => state.chart.bySongs);
  // const filteredByArtist = useSelector((state) => state.chart.byArtist);

  // const doMappingCharts = (data) => {
  //   let trackData = [];
  //   const objData = data.map((item) => {
  //     const artist = item.artist.name ? item.artist.name : item.artist;
  //     const title = item.name;
  //     const listeners = Number(item.listeners);
  //     return {artist, title, listeners}
  //   })

  //   trackData.push(objData)

  //   return trackData;
  // }

  // useEffect(() => {
  //   if (topTracks && topTracks.length > 0) {
  //     setSongsByTopTracks({
  //     columns: songsPlaylistColumns,
  //     rows: doMappingCharts(topTracks),
  //   })
  //   }
  // }, [topTracks]);

  // useEffect(() => {
  //   if (topArtist) {
  //     let topArtistData = [];

  //     const objData = topArtist.map((item) => {
  //       const artist = item.name;
  //       const listeners = Number(item.listeners);
  //       const playcount = Number(item.playcount);
  //       return {artist, listeners, playcount}
  //     })

  //     topArtistData.push(objData);

  //     setSongsByTopArtist({
  //       columns: songsArtisColumns,
  //       rows: topArtistData,
  //     })
  //   }
  // }, [topArtist]);

  // useEffect(() => {
  //   if (chartByCountry && chartByCountry.length > 0) {
  //     setSongsPlaylist({
  //       columns: songsPlaylistColumns,
  //       rows: doMappingCharts(chartByCountry),
  //     })
  //   }
  // }, [chartByCountry]);

  // useEffect(() => {
  //   if (filteredBySongs && filteredBySongs.length > 0) {
  //     setSongsPlaylist({
  //       columns: songsPlaylistColumns,
  //       rows: doMappingCharts(filteredBySongs),
  //     })
  //   }
  // }, [filteredBySongs]);

  // useEffect(() => {
  //   if (filteredByArtist && filteredByArtist.length > 0) {
  //     let topArtistData = [];

  //     const objData = filteredByArtist.map((item) => {
  //       const name = item.name;
  //       const listeners = Number(item.listeners);
  //       return {name, listeners}
  //     })

  //     topArtistData.push(objData);

  //     setSongsPlaylist({
  //       columns: songsByArtist,
  //       rows: topArtistData,
  //     })
  //   }
  // }, [filteredByArtist]);

  // const doFilterByArtists = (data) => {
  //   if (data !== '' && data !== null && data !== undefined) {
  //     dispatch(getbyArtist(data));
  //   } else {
  //     setSongsPlaylist({
  //       columns: songsPlaylistColumns,
  //       rows: doMappingCharts(chartByCountry),
  //     })
  //   }
  // };

  // const doFilterBySongs = (data) => {
  //   if (data !== '' && data !== null && data !== undefined) {
  //     dispatch(getbySongs(data));
  //   } else {
  //     setSongsPlaylist({
  //       columns: songsPlaylistColumns,
  //       rows: doMappingCharts(chartByCountry),
  //     })
  //   }
  // };


  const [key, setKey] = useState('home');

  return (

    <Container className="p-5 mb-5 rounded-3">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <div class="sample ten">
            <input type="text" name="search" placeholder="search" />
            <button type="submit" class="btn btn-search">
              <i class="fa fa-search"></i>
            </button>
            <button type="reset" class="btn btn-reset fa fa-times"></button>
          </div>
          <FullFeaturedCrudGrid />
        </Tab>
        
        <Tab eventKey="profile" title="Profile">
          <h1>Profile</h1>
        </Tab>
      </Tabs>
    </Container>
  );
}
