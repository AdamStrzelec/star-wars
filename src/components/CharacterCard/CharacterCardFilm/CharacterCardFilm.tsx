import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFilmName } from '../../../api/filmsApi';

type Props = {
    url: string
}

const Paragraph = styled.p`
    margin: 0;
    font-size: 11px;
`

const CharacterCardFilm: React.FC<Props> = ({ url }) => {

    const [filmName, setFilmName] = useState('Loading film...');

    useEffect(()=>{
        getFilmName(url)
        .then(response => {
            setFilmName(response.data.title);
        })
    })

    return(
        <Paragraph>{filmName}</Paragraph>
    )
}

export default CharacterCardFilm;