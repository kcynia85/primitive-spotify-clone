import React from 'react'
import styled from 'styled-components';
import SidebarOption from 'components/Player/Sidebar/SidebarOption/SidebarOption'

const StyledSidebar = styled.aside`
    flex: 0.2;
    height: 100vh;
    min-width: 230px;
    border: 1px solid hsl(0, 0%, 0%);
    color: white;
    background: hsl(0, 0%, 2%);
`;

const LogoSidebar = styled.img`
    margin-right: auto;
    height: 70px;
    padding: 10px;
`;

const Sidebar = () => {
    return (
        <StyledSidebar>
            <LogoSidebar 
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
                alt="spotofy logo in sidebar"/>
            <SidebarOption title="Home" />
            <SidebarOption title="Search" />
            <SidebarOption title="Your list" />
        </StyledSidebar>
    )
}

export default Sidebar
