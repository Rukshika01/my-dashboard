import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import TopNavigationBar from "./components/TopNavigationBar";
import DashboardCardsComponent from "./components/DashboardCardsComponent";
import LineGraphComponent from "./components/LineGraphComponent";
import PieChartComponent from "./components/PieChartComponent";
import BarChartComponent from "./components/BarChartComponent";
import PerformanceMetricsComponent from "./components/PerformanceMetricsComponent";
import ActivityLogComponent from "./components/ActivityLogComponent";

function App() {
  const { colorMode } = useColorMode();
  return (
    <Box 
      bg={colorMode === "light" ? "#EFEBE9" : "#1A202C"} 
      minH="100vh" 
      color={colorMode === "light" ? "#3E2723" : "white"}
      pt="71px" // Add padding to prevent overlap with fixed navbar
    >
      {/* Top Navigation Bar (Fixed at the Top) */} 
      <TopNavigationBar />

      <Flex>
        {/* Sidebar (Fixed on the Left) */}
        <Sidebar />

        {/* Main Content Area */}
        <Box flex="1" p={5} ml="250px"> 
          {/* Dashboard Cards */}
          <DashboardCardsComponent />

          {/* Line Chart & Pie Chart (Side by Side) */}
          <Flex mt={5} gap={5}>
            <Box flex="1" p={4} bg={colorMode === "light" ? "white" : "gray.700"} borderRadius="md" boxShadow="md">
              <LineGraphComponent />
            </Box>
            <Box flex="1" p={4} bg={colorMode === "light" ? "white" : "gray.700"} borderRadius="md" boxShadow="md">
              <PieChartComponent />
            </Box>
          </Flex>
          {/* Bar Chart & Performance Metrics (Side by Side) */}
          <Flex mt={5} gap={5}>
            <Box flex="1" p={4} bg={colorMode === "light" ? "white" : "gray.700"} borderRadius="md" boxShadow="md">
              <BarChartComponent />
            </Box>
            <Box flex="1" p={4} bg={colorMode === "light" ? "white" : "gray.700"} borderRadius="md" boxShadow="md">
              <PerformanceMetricsComponent />
            </Box>
          </Flex>
          {/* Activity Log (Full Width at Bottom) */}
                    <Box mt={5} p={4} bg={colorMode === "light" ? "white" : "gray.700"} borderRadius="md" boxShadow="md">
            <ActivityLogComponent />
          </Box>


        </Box>
      </Flex>
    </Box>
  );
}

export default App;
