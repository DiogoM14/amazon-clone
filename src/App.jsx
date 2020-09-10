import React, { useEffect } from "react";
import Global from "./styles/global";

import Router from "./router";
import { auth } from "./services/firebase";

function App() {
  return (
    <>
      <Router />
      <Global />
    </>
  );
}

export default App;
