import React, {useState} from 'react';

function Pokapi() {
    const [imageSrc, setImageSrc] = useState('');
    const [pokemonName, setPokemonName] = useState('');
    const [randomNumber, setRandomNumber] = useState('');

    const changePokemon = async () => {
        let randomNumber = generateNumber();
        setRandomNumber(randomNumber);

        // appel API
        let request = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

        let data = await fetch(request);
        console.log(data);

        let response = await data.json();
        console.log(response);

        let imageSrc = response.sprites.front_default;
        setImageSrc(imageSrc);
        let pokemonName = response.name;
        setPokemonName(pokemonName);

    };

    const generateNumber = (): number => {
        const min = 1;
        const max = 151;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleClick = () => {
        changePokemon();
    };

    return (
        <>
            <div id="wrapper">
                <div id="image-wrapper">
                    <img id="image" src={imageSrc} alt="" />
                </div>
            </div>
            <div id="name">Nom : {pokemonName}</div>
            <div id="number">Numéro : {randomNumber}</div>
            <button id="button" onClick={handleClick}>
                Get Pokemon!
            </button>
        </>
    );
}

export default Pokapi;

