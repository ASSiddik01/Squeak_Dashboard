import React from "react";
import { Box } from "@mui/material";
import Header from "../sections/Header";
import PieChart from "../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="70vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
