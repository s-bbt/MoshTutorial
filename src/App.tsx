import Message from './Message';
import NavBar from "./components/NavBar.tsx";
import { Fragment } from "react";
import HookStateTest from "./components/HookStateTest.tsx";
import Pokapi from "./components/Pokapi.tsx";

function App() {
  return (
      <Fragment>
        <NavBar />
        <Message />
          <HookStateTest />
          <Pokapi />
      </Fragment>
  );
}

export default App;
