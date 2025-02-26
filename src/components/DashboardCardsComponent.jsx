import { SimpleGrid, Box, Text, useColorMode } from "@chakra-ui/react";
import CountUp from "react-countup";

const DashboardCardsComponent = () => {
  const { colorMode } = useColorMode();

  // Card data
  const stats = [
    { title: "Total Students", value: 1051 },
    { title: "Total No. of Courses", value: 42 },
   
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} p={6} ml={{ base: "0", md: "80px" }}>
      {stats.map((stat, index) => (
        <Box
          key={index}
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          textAlign="center"
          transition="all 0.3s ease-in-out"
          bg={colorMode === "light" ? "white" : "#2D2D2D"} 
          _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          border={colorMode === "dark" ? "1px solid #8B4513" : "none"} 
        >
          <Text fontSize="lg" fontWeight="bold" color={colorMode === "light" ? "gray.700" : "white"}>
            {stat.title}
          </Text>

          {/* Number Counter Animation */}
          <Text fontSize="3xl" fontWeight="bold" color="#8B4513" mt={2}>
            <CountUp start={0} end={stat.value} duration={2} separator="," />
          </Text>

          <Text fontSize="sm" color={colorMode === "light" ? "gray.500" : "gray.300"}>18 Mar 2024</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default DashboardCardsComponent;
