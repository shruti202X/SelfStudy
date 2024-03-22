import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
import UpdatePassword from "./pages/UpdatePassword";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tasks/:subject_id" element={<Tasks />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/update-password" element={<UpdatePassword />} />
      </Routes>
    </>
  );
};

export default App;
