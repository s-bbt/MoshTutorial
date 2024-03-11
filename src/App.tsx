import Message from './Message';
import NavBar from "./components/NavBar.tsx";
import { Fragment } from "react";
import HookStateTest from "./components/HookStateTest.tsx";
import Pokapi from "./components/Pokapi.tsx";
import Cart from "./components/Panier.tsx";
import EventTest from "./components/EventTest.tsx";

function App() {
  return (
      <Fragment>
        <NavBar />
        <Message />
          <HookStateTest />
          <Pokapi />
          <Cart />
          <EventTest />
      </Fragment>
  );
}

export default App;
