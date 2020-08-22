import React from 'react'
import styled from 'styled-components';

const StyledBody = styled.main`
    color: hsl(0, 0%, 100%);
    background: linear-gradient(hsl(249, 14%, 40%), hsla(0, 0%, 0%, 1));
`;

const Body = () => (
    <StyledBody>
        <h1>Body</h1>
    </StyledBody>
);

export default Body;