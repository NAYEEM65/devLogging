import "./App.css";

import "antd/dist/reset.css";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/auth/Signin";
import Signup from "./Pages/auth/Signup";
function App() {
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
