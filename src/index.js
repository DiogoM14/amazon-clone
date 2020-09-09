import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import { StateProvider } from "./store/StateProvider.jsx";
import reducer, { initialState } from "./store/reducer.js";

ReactDOM.render(
  <React.StrictMode>
    {/* 
        initialState = Como o estado é no inicio
        reducer = manipula o dataLayer
    */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
