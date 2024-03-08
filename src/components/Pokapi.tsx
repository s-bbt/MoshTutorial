import React from 'react';

function Pokapi() {
    const changePokemon = async () => {
        let randomNumber = generateNumber();

        // appel API
        let request = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

        let data = await fetch(request);
        console.log(data);

        let response = await data.json();
        console.log(response);

        let image = "reponse.sprite.front_default";


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
                    <img id="image" src="{}" alt="" />
                </div>
            </div>
            <div id="name"></div>
            <div id="number"></div>
            <button id="button" onClick={handleClick}>
                Get Pokemon!
            </button>
        </>
    );
}

export default Pokapi;

