import React from 'react';
import styled from 'styled-components';

const StyledSidebarOption = styled.div`
    color: grey;
    height: 40px;
    margin-left: 10px;
    cursor: pointer;
    transition: .2s color ease-in;

    &:hover {
        color: white;
    }
`;

const SidebarOption = ({ title, Icon }) =>  {
 return ( 
    <StyledSidebarOption>  
        <p>{title}</p>
    </StyledSidebarOption> 
    );
};
    


export default SidebarOption;