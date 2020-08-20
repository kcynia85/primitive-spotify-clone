import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    height: 65px;
    width: 100%;
    background: hsl(0, 0%, 16%);
    padding: 20px;
`;

const Footer = () => (
    <StyledFooter>
        <h1>Footer</h1>
    </StyledFooter>
);

export default Footer;
