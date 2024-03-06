import React from 'react';

function Pokapi() {
    const changePokemon = () => {
        let randomNumber = generateNumber();

        // appel API
        let request = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
        fetch(request)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Do something with the data
            })
            .catch(error => {
                console.log(error);
            });
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
                    <img id="image" src="" alt="" />
                </div>
            </div>
            <div id="name"></div>
            <div id="number"></div>
            <div id="button" onClick={handleClick}>
                Get Pokemon!
            </div>
        </>
    );
}

export default Pokapi;

