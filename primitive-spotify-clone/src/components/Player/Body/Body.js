import { useDataLayerValue } from 'data/DataLayer';
import React from 'react'
import styled from 'styled-components';
import Header from 'components/Player/Body/Header/Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from 'components/Player/Body/SongRow/SongRow'

const StyledBody = styled.div`
    color: ${({ theme }) => theme.colors.white};
    overflow-y: overlay;
    background: linear-gradient(hsl(249, 14%, 40%), hsla(0, 0%, 0%, 1));
    padding: 30px;
    height: 100vh;
    flex: 0.8;

    &::-webkit-scrollbar{
        display: none;
        }

    & .discoverWeeklySection {
        display: flex;
        align-items: flex-end;
        padding: 10px;

        @media(max-width: ${({ theme }) => theme.media.tablet}) {
            flex-wrap: wrap;
        }
    }

    & .discoverWeeklySection__subHeader {
        font-size: ${({ theme }) => theme.fontSize.extraLarge};
        margin: 10px 0 10px !important;
    }

    & .discoverWeeklySection__paragraph {
        font-size: ${({ theme }) => theme.fontSize.small};
    }

    & .discoverWeeklySection__albumPicture {
        width: 30vh;
        object-fit: cover;
        margin: 0 20px;
        box-shadow: 0 4px 60px rgba(0,0,0, 0.5);
    }

    & .discoverWeeklySection__songs {
        margin: 20px -30px;
    }

    & .discoverWeeklySection__icons{
        display: flex;
        align-items: center;
    }

    & .discoverWeeklySection__icons > .MuiSvgIcon-root {
        margin-right: 20px;
    }

    & .discoverWeeklySection__playIcon {
        font-size: 80px !important;
        margin-left: 50px;
        margin-top: 20px;
        margin-bottom: 20px;

        &:hover {
            transition: 100ms transform ease-in;
            transform: scale(1.08);
        }
    }
`;


const Body = ( { spotify }) => {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return ( 
        <StyledBody>
            <Header spotify={spotify} />
            <div className="discoverWeeklySection">
                <img className="discoverWeeklySection__albumPicture" src={discover_weekly?.images[0].url} alt="" />
                <div className="discoverWeeklySection__infoText">
                    <strong>PLAYLIST</strong>
                    <h2 className="discoverWeeklySection__subHeader">Discover Weekly</h2>
                    <p className="discoverWeeklySection__paragraph">{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="discoverWeeklySection__songs">
                <div className="discoverWeeklySection__icons">
                    <PlayCircleFilledIcon className="discoverWeeklySection__playIcon"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>
                    {discover_weekly?.tracks.items.map((item) => (
                        <SongRow track={item.track} />
                    ))}
            </div>
        </StyledBody>
    );
}
export default Body;