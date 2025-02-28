import { Box, useColorMode, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { useState, useMemo } from "react";

const LineGraphComponent = () => {
  const { colorMode } = useColorMode(); 
  const [chartData] = useState([
    {
      name: "2023",
      data: [20, 30, 40, 40, 50, 70],
    },
    {
      name: "2024",
      data: [40, 50, 50, 80, 60, 50],
    },
  ]);

  // chart options
  const chartOptions = useMemo(() => ({
    chart: {
      id: "user-activity-area-chart",
      type: "area",
      height: 350,
      toolbar: { show: false },
      background: "transparent",
    },
    colors: ["#FF5733", "#3498DB"], 
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 3 },
    xaxis: {
     
      categories: [
        "1 March",
        "1 April",
        "1 May",
        "1 June",
        "1 July",
        "1 August",
      ],
      labels: {
        style: {
          colors: colorMode === "light" ? "black" : "white",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: colorMode === "light" ? "black" : "white",
        },
      },
    },
    tooltip: {

      theme: colorMode,
    },
    theme: { mode: colorMode },
  }), [colorMode]); 

  return (
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      color={colorMode === "light" ? "black" : "white"}
      p={4}
      m={4}
      ml="80px"
      borderRadius="md"
      boxShadow="lg"
    >
      {/* Title with Gradient */}
      <Text
        fontSize="xl"
        fontWeight="bold"
        mb={4}
        textAlign="center"
        bgGradient={colorMode === "light"
          ? "linear(to-r, black, rgb(169, 53, 53))"
          : "linear(to-r, white, rgb(255, 255, 255))"}
        bgClip="text"
      >
        Year-over-Year Student Enrollment Comparison (2023 vs. 2024)
      </Text>

      {/* Area Chart */}
      <Chart options={chartOptions} series={chartData} type="area" height={350} />
    </Box>
  );
};

export default LineGraphComponent;
