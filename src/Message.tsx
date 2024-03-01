import React from "react";
import ReactDOM from "react-dom";

function Message () {
     return ReactDOM.render(
         <React.Fragment><h1>L'Arbre de vie</h1>
             <h2>Micro-ferme créative à Liverdun</h2></React.Fragment>, document.getElementById("root")
     )
}

export default Message;