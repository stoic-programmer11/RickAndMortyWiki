import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Character = ({ resident }) => {

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(`${resident}`)
            .then(res => setCharacter(res.data))
    }, [])




    return (
        <li className='card'>
            <span className='character-name'>{character.name}</span> <br />
            <img src={character.image} alt="" />
            <p>Race: {character.species}</p>
            <p>Origin: {character.origin?.name}</p>
            <p>Appearances: {character.episode?.length}</p>
            <p>Status: {character.status}</p>
        </li>
    );
};

export default Character;