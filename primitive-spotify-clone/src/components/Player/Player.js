import React from 'react';
import styled from 'styled-components';
import Sidebar from 'components/Player/Sidebar/Sidebar';
import Body from 'components/Player/Body/Body';
import Footer from 'components/Player/Footer/Footer'

const StyledPlayer = styled.div`

`;

const InnerStyledPlayer = styled.div`
      display: grid;
      grid-template-columns: minmax(230px, 15%) 1fr;
  }
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

