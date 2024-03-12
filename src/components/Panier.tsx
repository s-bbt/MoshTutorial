import {useState} from "react";

const tabLegumes = [
    {id: 1, nomLeg: "Carotte", prixLeg: 5},
    {id: 2, nomLeg: "Navet", prixLeg: 6},
    {id: 3, nomLeg: "Epinard", prixLeg: 2}
];

function Cart() {

    const [cart, updateCart] = useState(0)

    return (
        <div className='cart'>
            <h2>Panier</h2>
            <div>
                <ul>
                    {tabLegumes.map((legume) => (
                        <li>{legume.nomLeg} : {legume.prixLeg} €
                            <button onClick={() => updateCart(cart+(legume.prixLeg))}>Ajouter</button>
                        </li>
                    ))
                    }

                </ul>
            </div>
            <h3>Total : {cart}€</h3>
        </div>

    )
}

export default Cart;