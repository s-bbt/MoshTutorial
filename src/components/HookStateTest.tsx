import {useState} from "react";

function HookStateTest () {
    const [nombre, setNombre] = useState(0)

    const increment = () => {
        setNombre(nombre + 1)
    }

    return <><p>Nombre : {nombre}</p>
    <button onClick={increment}>Incrémenter</button>
        </>
}

export default HookStateTest;