import React from "react";
import { Box } from "@mui/material";
import Header from "../sections/Header";
import BarChart from "../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="70vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
