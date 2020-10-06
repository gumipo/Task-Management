import React from "react";
import Router from "./Router";
import "./assets/reset.css";
import "./assets/style.css";

import Header from "./Components/Header/Header";

const App = () => {
  return (
    <React.Fragment>
      <main style={{ backgroundColor: "rgba(0,255,43,0.08)" }}>
        <Header />
        <Router />
      </main>
    </React.Fragment>
  );
};
export default App;
