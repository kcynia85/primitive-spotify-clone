import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from 'data/DataLayer';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: 20px;

    & .header__leftSide {
        flex: 0.6;
        min-width: 70px;
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.lighterGray};
        border-radius: 30px;
        padding: 10px;
        display: flex;
        align-items: center;
    }

    & .header__searchInput {
        border: none;
        width: 100%;
    }

    & .header__rightSide {
        display: flex;
        align-items: center;
    }

   & .header__subHeader {
        margin-left: 10px;
   }
`;

const Header = () => {
    const [{ user }, dispatch] = useDataLayerValue();

    return ( 
        <StyledHeader>
            <div className="header__leftSide">
                <SearchIcon />
                <input className="header__searchInput" 
                placeholder="Search for Artists, Songs, etc."
                type="text"
                />
            </div>
            <div className="header__rightSide">
                <Avatar src={user?.images[0]?.url} alt="profile picture"/>
                <h4 className="header__subHeader">Kamil Łazarski  </h4>
            </div>
        </StyledHeader>
    );
};

export default Header;
