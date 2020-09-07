import { useDataLayerValue } from 'data/DataLayer';
import React from 'react'
import styled from 'styled-components';
import SidebarOption from 'components/Player/Sidebar/SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';


const StyledSidebar = styled.aside`
    height: 100vh;
    min-width: 230px;
    color: white;
    background: hsl(0, 0%, 2%);
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10%;

    & .styledSidebar__underline {
        border: 1px solid #282828;
        width: 75%;
        margin: 10px auto;
    }
`;

const LogoSidebar = styled.img`
    margin-right: auto;
    height: 70px;
    padding: 15.5px;
    margin-top: 10px;
`;

const PlaylistTitle = styled.strong`
    text-transform: uppercase;
    margin-top: 20px;
    margin-left: 15px;
    padding: 10px;
    font-size: 12px;
`;

const Sidebar = () => {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <StyledSidebar>
            <LogoSidebar 
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
                alt="spotofy logo in sidebar"/>
            <SidebarOption icon Icon={HomeIcon} title="Home" />
            <SidebarOption icon Icon={SearchIcon} title="Search" />
            <SidebarOption icon Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <PlaylistTitle>playlists</PlaylistTitle>
            <hr className="styledSidebar__underline"/>

            {playlists?.items?.map(({ name }) => (
                <SidebarOption title={name} />
            ))}
            
        </StyledSidebar>
    )
}

export default Sidebar
