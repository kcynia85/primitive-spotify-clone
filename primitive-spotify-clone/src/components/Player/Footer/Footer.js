import React, { useState } from 'react';
import styled from 'styled-components';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const StyledFooter = styled.footer`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    bottom: 0;
    height: 75px;
    width: 100%;
    background: hsl(0, 0%, 16%);
    padding: 10px;
`;

const AlbumDetails = styled.div` 
    flex: 0.3;
    color: hsl(0,0%,100%);
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    align-items: center;
    text-align: left;

    & .albumDetails__cover {
        height: 50px;
        width: 50px;
        margin-right: 20px;
        margin-left: 20px;
        object-fit: contain;
        box-shadow: 0px 0px 19px -6px rgba(0, 0, 0, 0.17);
    }

    & .albumDetails__title {
        margin-bottom: -10px;
    }

    & .albumDetails__author {
        color: hsl(0,0%,40%);
        font-size: { ({ theme }) => theme.fontSize.extraSmall };
    }

    & .albumDetails__favouriteIcon {
        padding-left: 10px;
        padding-right: 10px;
        width: auto;
        margin-left: 20px;
        transition: color .2s;
        color: hsl(0,0%,40%);

        &:hover {
            color: #1db954;
        }
    
    & .albumDetails__favouriteIcon--green {
            color: #1db954;
            transition: color .2s;
            
            &:hover {
                color: #4efe43;
            }
        }
    }
`;

const PlayerControls = styled.div`
    flex: 0.4;
    padding: 0;
    box-shadow: 0px 0px 19px -6px rgba(0, 0, 0, 0.17);
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;

    & .playerControls__icon {
        color: hsl(0,0%,40%);
        transition: color .2s;

        &:hover { 
            color: white;
        }
    }
    & .playerControls__icon--large > svg {
        width: 20px !important;
    }
`;
    
const VolumeControls= styled.div` 
    flex: 0.3;
    color: hsl(0,0%,100%);
    display: flex;
    justify-content: flex-end;
    color: hsl(0,0%,40%);

    & .volumeControls__list {
        margin-right: 20px;
    }

    & .volumeControls__volume .MuiSlider-rail {
        margin-right: 20px;
        color: white !important;
    }
`;

const Footer = () => {
    const [toggleHeart, setToggleHeart] = useState(false);
    const toggle = () => setToggleHeart(!toggleHeart);

    return (  <StyledFooter>
        <AlbumDetails>
            <img 
            src="https://res.cloudinary.com/dhthrowim/image/upload/v1598214570/spotify-demo/Screen_Shot_2020-08-23_at_10.29.05_PM_tkf2nh.png" 
            alt="ksiądz Bartczak okładka"  
            className="albumDetails__cover"/>
            <div> 
             <h4 className="albumDetails__title">Lubię być księdzem </h4>
             <p className="albumDetails__author">ks. Jakub Bartczak</p>
            </div>
            <div className="albumDetails__favouriteIcon" onClick={toggle}> 
                { toggleHeart ? <FavoriteIcon style={{ fontSize: 18 }} className="albumDetails__favouriteIcon--green" /> : < FavoriteBorderIcon style={{ fontSize: 18 }} /> }
            </div>
            
        </AlbumDetails>

        <PlayerControls>
            <ShuffleIcon style={{ fontSize: 18 }} className="playerControls__icon"/>
            <SkipPreviousIcon style={{ fontSize: 18 }} className="playerControls__icon" />
            <PlayCircleOutlineIcon style={{ fontSize: 40 }} className="playerControls__icon"/>
            <SkipNextIcon style={{ fontSize: 18 }} className="playerControls__icon" />
            <RepeatIcon style={{ fontSize: 18 }} className="playerControls__icon"/>
        </PlayerControls>

        <VolumeControls>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
        </VolumeControls>
    </StyledFooter>

    );
};

export default Footer;
