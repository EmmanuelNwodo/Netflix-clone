import React from "react";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Player } from "./pages/Player/Player";

const App = () => {
  return (
    <div>
      <Home />
      <Login />
      <Player />
    </div>
  );
};

export default App;
