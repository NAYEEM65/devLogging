import "./App.css";

import "antd/dist/reset.css";
import { Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/auth/Signin";
import Signup from "./Pages/auth/Signup";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";
import { useAppDispatch } from "./hooks/hooks";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    store.dispatch<any>(loadUser());
  }, [dispatch]);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Fragment>
  );
}

export default App;
