"use client";

import Nav from "../components/Nav/Nav";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  useAuth();
  return (
    <div id="root">
      <Nav />
      <div id="container-center">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
