import React from 'react'
import styled from 'styled-components';
import { loginUrl } from 'api/spotify';
import Button from 'components/Login/Button/Button';

const StyledLogin = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background: hsl(0, 0%, 0%);
`;

const ImageLogin = styled.img`
     width: 100%;
`;

const Login = () => (
    <StyledLogin>
        <h1>Im the login page</h1>
        <ImageLogin 
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="spotify logo"
        />
        <Button href={loginUrl}>LOGIN WITH SPOTIFY</Button>
    </StyledLogin>
);

export default Login;

