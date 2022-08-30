import React from "react";
import DataTable from "../components/DataTable";
import { Container } from "@mui/material";

const Home = (props) => {
  return (
    <main>
      <Container>
        <DataTable users={props.users} />
      </Container>
    </main>
  );
};

export default Home;
