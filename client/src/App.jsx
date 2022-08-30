import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import axios from "axios";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import Details from "./router/Details";
import Edit from "./router/Edit";
import TopUp from "./router/TopUp";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <Outlet />

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home users={users} />} />
          <Route path="/detail" exact element={<Details />} />
          <Route path="/edit" exact element={<Edit />} />
          <Route path="/topup" exact element={<TopUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
