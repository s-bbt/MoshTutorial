import Message from './Message';
import NavBar from "./components/NavBar.tsx";
import { Fragment } from "react";
import HookStateTest from "./components/HookStateTest.tsx";

function App() {
  return (
      <Fragment>
        <NavBar />
        <Message />
          <HookStateTest />
      </Fragment>
  );
}

export default App;
