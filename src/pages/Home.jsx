import React from "react";
import { useAuth } from "../context/AuthProvider";
import Subjects from "./Subjects";
import "./Home.css";

const Home = () => {
  const { user } = useAuth();

  return (
    <main className="main-content">
      <Subjects user_id={user.id} />
    </main>
  );
};

export default Home;