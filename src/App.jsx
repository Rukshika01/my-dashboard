import { Box, Flex, useColorMode } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import TopNavigationBar from "./components/TopNavigationBar";
import DashboardCardsComponent from "./components/DashboardCardsComponent";


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

         
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
