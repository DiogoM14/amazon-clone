import React, { useEffect } from "react";
import Global from "./styles/global";

import Router from "./router";
import { auth } from "./services/firebase";
import { useStateValue } from "./store/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //  Se o user acabou de logar / o user já estava logado
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // o user não está logado
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  });
  return (
    <>
      <Router />
      <Global />
    </>
  );
}

export default App;
