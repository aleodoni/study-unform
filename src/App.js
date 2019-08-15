import React from "react";
import Toolbar from "./components/Toolbar";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Formulario1 from "./pages/Formulario1";
import Formulario2 from "./pages/Formulario2";
import Formulario3 from "./pages/Formulario3";

function App() {
  return (
    <>
      <Router>
        <Toolbar />
        <Route path="/formulario1" component={Formulario1} />
        <Route path="/formulario2" component={Formulario2} />
        <Route path="/formulario3" component={Formulario3} />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
