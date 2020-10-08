import React from "react";
import Router from "./Router";
import { useSelector } from "react-redux";
import "./assets/reset.css";
import "./assets/style.css";
import Header from "./Components/Header/Header";
import DrawerHeader from "./Components/Header/DrawerHeader";
import { getIsSignedIn } from "./Redux/Users/selector";

const App = () => {
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);
  return (
    <React.Fragment>
      <main style={{ backgroundColor: "rgba(0,255,43,0.08)" }}>
        {!isSignedIn ? <Header /> : <DrawerHeader />}
        <Router />
      </main>
    </React.Fragment>
  );
};
export default App;
