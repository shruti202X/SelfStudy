import React from "react";
import { useAuth } from "../context/AuthProvider";
import Subjects from "./Subjects";
import "./Home.css";

const Home = () => {
  const { user } = useAuth();

  return (
    <div style={{ fontSize: "24px" }} className="main-content">
      You are logged in with the following detalis: <hr />
      email address: {user.email} <hr />
      id: {user.id}
      <hr />
      <Subjects user_id={user.id} />
    </div>
  );
};

export default Home;
