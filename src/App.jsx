import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.js";
import CustomNavigator from "./navigator/CustomNavigator";
import routes from "./navigator/routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <CustomNavigator routes={routes} />
    </BrowserRouter>
  );
}

export default App;
