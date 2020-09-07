import React from 'react'
import styled from 'styled-components';

const StyledSongRow = styled.div `
    margin-left: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    z-index: 100;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.black};
        opacity: 0.8;
    }

    & .songRow__album {
        height: 40px;
        object-fit: cover;
    }

    & .songRow__info {
        margin-left: 20px;
    }

    & .songRow__header {
        font-size: ${({ theme }) => theme.fontSize.normal};
    }

    & .songRow__paragraph {
        font-size: ${({ theme }) => theme.fontSize.small};
        margin-top: 3px;
        color: gray;
    }
`;

const SongRow = ({ track }) => {
    return (
        <StyledSongRow>
            <img className="songRow__album" src={track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1 className="songRow__header">{track.name}</h1>
                <p className="songRow__paragraph"> 
                    {track.artists.
                    map((artist) => artist.name)
                    .join(", ")} - {" "} {track.album.name}
                </p>
            </div>
        </StyledSongRow>
    )
}

export default SongRow
