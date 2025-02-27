import { Box, useColorMode, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { useMemo } from "react";

const BarChartComponent = () => {
  const { colorMode } = useColorMode(); // Detect light/dark mode

  const barChartOptions = useMemo(() => ({
    chart: {
      id: "income-expense-chart",
      background: "transparent",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: { 
          colors: colorMode === "light" ? "#333" : "#FFF",
        }
      }
    },
    yaxis: {
      labels: {
        style: { 
          colors: colorMode === "light" ? "#333" : "#FFF",
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#0c6200", "#9c0000"], // Green for Income, Red for Expense
    theme: { mode: colorMode },
    legend: {
      labels: { colors: colorMode === "light" ? "#000" : "#FFF" },
      position: "bottom",
    },
  }), [colorMode]); 

  const barChartData = [
    {
      name: "Income",
      data: [5000, 7000, 6500, 8000, 7500, 9000],
    },
    {
      name: "Expense",
      data: [1000, 5100, 2800, 3200, 4000, 6000],
    },
  ];

  return (
    <Box
      flex="1"
      minW="400px"
      bg={colorMode === "light" ? "white" : "gray.700"}
      color={colorMode === "light" ? "black" : "white"}
      p={4}
      borderRadius="md"
      boxShadow="lg"
      textAlign="center"
    >
      {/* Dynamic Heading */}
      <Text 
        fontSize="xl" 
        fontWeight="bold" 
        mb={4} 
        bgGradient={colorMode === "light" 
            ? "linear(to-r, black,rgb(169, 53, 53))" 
            : "linear(to-r,white,rgb(255, 255, 255))"} 
        bgClip="text"
      >
        Monthly Income vs. Expense
      </Text>

      {/* Bar Chart */}
      <Chart options={barChartOptions} series={barChartData} type="bar" height={300} />
    </Box>
  );
};

export default BarChartComponent;
