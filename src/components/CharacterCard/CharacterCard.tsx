import React, { useState } from 'react';
import styled from 'styled-components';
import CharacterCardFilm from './CharacterCardFilm/CharacterCardFilm';

type Props = {
    name: string,
    gender: string,
    birth_year: string,
    height: string,
    films: string[]
}

const Wrapper = styled.div`
    @media(max-width: 768px){
        width: 90%;
    }
    width: 50%;
    height: 220px;
    margin: 10px auto;
    background-color: #E5E8E8;
    border-radius: 15px;
    text-align: center;
    color: #566573;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
`

const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #2471A3;
    color: #CCD1D1;
    padding: 5px 10px;
    border-radius: 5px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
`
const MoreInfoWrapper = styled.div<{ isShowMoreOpen: boolean }>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: -100%;
    left: 0;
    background-color: #2C3E50;
    color: #D5D8DC;
    transform: ${props => props.isShowMoreOpen ? 'translateY(100%)' : 'translateY(0)'};
    transition: transform 0.3s ease-in-out;
`

const CharacterCard: React.FC<Props> = ({ name, gender, birth_year, height, films }) => {

    const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);

    return(
        <Wrapper>
            <h3>{name}</h3>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Birth year:</strong> {birth_year}</p>
            

            <MoreInfoWrapper isShowMoreOpen={isShowMoreOpen}>
                 
                <p><strong>Height: </strong>{height}</p>
                <p style={{marginBottom: '3px'}}><strong>Films:</strong></p>
                {isShowMoreOpen &&
                    films.map(film => 
                        <CharacterCardFilm key={film} url={film}/>    
                    )
                }
            </MoreInfoWrapper>

            <StyledButton onClick={()=>setIsShowMoreOpen(!isShowMoreOpen)}>
                {isShowMoreOpen ? 'Show less' : 'Show more'}
            </StyledButton>
        </Wrapper>
    )
}

export default CharacterCard;