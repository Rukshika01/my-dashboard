import { Box, useColorMode, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { useMemo, useState } from "react";

const PerformanceMetricsChart = () => {
  const { colorMode } = useColorMode(); 

  const [chartData] = useState([10, 25, 50]); // Sample performance data

  // Memoized chart options for dynamic theme support
  const chartOptions = useMemo(() => ({
    chart: {
      type: "polarArea",
      width: 380,
    },
    labels: ["Error Rate", "Dropout Rate", "Completion Rate"],
    fill: { opacity: 1 },
    stroke: { width: 1 },
    yaxis: { show: false },
    legend: {
      position: "right",
      fontSize: "9px",
      labels: {
        colors: colorMode === "light" ? "black" : "white",
      },
       //Add values next to labels
      formatter: function (seriesName, opts) {
        return `${seriesName}: ${chartData[opts.seriesIndex]}%`;
      },
    },
    plotOptions: {
      polarArea: {
        rings: { strokeWidth: 1 },
        spokes: { strokeWidth: 2 },
      },
    },
    dataLabels: {
      enabled: false, 
    },
  }), [colorMode, chartData]); // Recalculate when color mode changes

  return (
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      color={colorMode === "light" ? "black" : "white"}
      p={4}
      m={4}
      borderRadius="md"
      boxShadow="md"
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
        Performance Metrics Overview
      </Text>

      {/* Polar Area Chart with Legend on the Right */}
      <Chart options={chartOptions} series={chartData} type="polarArea" width={380} />
    </Box>
  );
};

export default PerformanceMetricsChart;
