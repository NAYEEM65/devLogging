import "./App.css";

import "antd/dist/reset.css";
import { Routes, Route } from "react-router-dom";
import { FC, Fragment, ReactElement, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/auth/Signin";
import Signup from "./Pages/auth/Signup";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";
import { useAppDispatch } from "./hooks/hooks";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import CreateProfile from "./components/profileForm/CreateProfile";
import EditProfile from "./components/profileForm/EditProfile";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App: FC = (): ReactElement => {
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
        <Route
          path="/create-profile"
          element={
            <PrivateRoute>
              <CreateProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/experience"
          element={
            <PrivateRoute>
              <Experience />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-education"
          element={
            <PrivateRoute>
              <Education />
            </PrivateRoute>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default App;
