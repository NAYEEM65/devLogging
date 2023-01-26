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
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
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
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard deleteAccount={undefined} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
