function handleClick(e: string) {
console.log(`Ceci est un clic`, e)
}


function EventTest () {
    let name = "pirouette";
    return (
        <li className='lmj-plant-item' onClick = {()=> handleClick(name)}>
            {name}
        </li>
    )
}

export default EventTest;