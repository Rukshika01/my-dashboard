import { Box, useColorMode, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { useMemo } from "react";

const PieChartComponent = () => {
  const { colorMode } = useColorMode(); // Get light/dark mode

  // Memoized Pie Chart options
  const pieChartOptions = useMemo(() => ({
    chart: {
      id: "user-engagement-chart",
      background: "transparent",
    },
    labels: ["Quizzes", "Resources", "Assessments", "Videos", "Q/A"],
    legend: {
      labels: { 
        colors: colorMode === "light" ? "#000000" : "#ffffff",
      },
      position: "bottom", 
    },
    theme: { mode: colorMode }, 
  }), [colorMode]); // Recalculate when colorMode changes

  const pieChartData = [10, 50, 5, 20, 15];

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
      {/*  Dynamic Gradient Heading */}
      <Text 
        fontSize="xl" 
        fontWeight="bold" 
        mb={4} 
        bgGradient={colorMode === "light" 
          ? "linear(to-r, black,rgb(169, 53, 53))" 
          : "linear(to-r,white,rgb(255, 255, 255))"} 
        bgClip="text"
      >
        User Engagement for the Year 2024
      </Text>

      {/* Pie Chart */}
      <Chart options={pieChartOptions} series={pieChartData} type="pie" height={300} />
    </Box>
  );
};

export default PieChartComponent;
