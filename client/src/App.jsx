import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { Container } from "@mui/material";
import DataTable from "./components/DataTable";
import axios from "axios";

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
    <div>
      <Navbar />
      <Banner />
      <Container>
        <DataTable users={users} />
      </Container>
    </div>
  );
};

export default App;
