import React from 'react';
import styled from 'styled-components';
import Sidebar from 'components/Player/Sidebar/Sidebar';
import Body from 'components/Player/Body/Body';
import Footer from 'components/Player/Footer/Footer'

const StyledPlayer = styled.div`

`;

const InnerStyledPlayer = styled.div`
    display: flex;
`;

const Player = () => {
    return (
        <StyledPlayer>
            <InnerStyledPlayer>
                <Sidebar />
                <Body />
            </InnerStyledPlayer>
            <Footer />
        </StyledPlayer>
    )
}

export default Player;

