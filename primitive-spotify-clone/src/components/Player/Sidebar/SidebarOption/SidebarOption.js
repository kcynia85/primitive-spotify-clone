import React from 'react';
import styled from 'styled-components';

const StyledSidebarOption = styled.div`
    display: flex;
    align-items: center;
    color: grey;
    height: 40px;
    margin-left: 10px;
    cursor: pointer;
    transition: .2s color ease-in;

    &:hover {
        color: white;
    }

    & .sidebarOption__icon {
        padding-left: 10px;
        padding-right: 10px;
        width: auto;
    }
    
    & .sidebarOption__paragraph
     {
        margin-top: 10px;
        margin-left: 20px;
        font-size: 14px;
    }
`;

const SidebarOption = ({ title, Icon }) =>  {
 return ( 
    <StyledSidebarOption> 
        {Icon && <Icon className="sidebarOption__icon"/>} 
        {Icon ? <h4>{title}</h4> : <p className="sidebarOption__paragraph">{title}</p>}
    </StyledSidebarOption> 
    );
};
    
export default SidebarOption;