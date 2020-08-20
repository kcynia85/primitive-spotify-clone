import { useDataLayerValue } from 'data/DataLayer';
import React, { useState, useEffect } from 'react';
import Login from 'components/Login/Login';
import Player from 'components/Player/Player';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/theme';
import { getTokenFromUrl } from 'api/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

const Root = () => { 
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();  
    window.location.hash = "";
    const _token = hash.access_token;
 
    if (_token) {

      dispatch({
        type:'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
          dispatch({
            type: 'SET_USER',
            user: user,
          })
      })
    }
  }, []);

  console.log("Hey", user, token)
  return ( 
    <ThemeProvider theme={theme}>
      <GlobalStyle />     
        <div className="app">
          { token ? <Player spotify={spotify} /> : <Login /> } 
        </div>
    </ThemeProvider> 
)};

  
export default Root;
