import React from "react";
import { Box } from "@mui/material";
import Header from "../sections/Header";
import LineChart from "../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="70vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
