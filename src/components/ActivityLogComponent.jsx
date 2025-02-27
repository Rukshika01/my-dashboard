import { Box, VStack, Text, useColorMode } from "@chakra-ui/react";

const logs = [
  { message: "Adam123 Successfully logged in", time: "1 hrs ago" },
  { message: "EvelynJenner Successfully logged in", time: "3 hrs ago" },
  
];

const ActivityLog = () => {
  const { colorMode } = useColorMode(); // Detect Light/Dark Mode

  return (
    <Box
      bg={colorMode === "light" ? "white" : "gray.700"}
      color={colorMode === "light" ? "black" : "white"}
      p={4}
      m={4}
      ml="74px"
      borderRadius="md"
      boxShadow="md"
    >
      {/* Title with Dynamic Gradient */}
      <Text
        fontSize="lg"
        fontWeight="bold"
        mb={2}
        textAlign="center"
        bgGradient={colorMode === "light"
          ? "linear(to-r, black, rgb(169, 53, 53))"
          : "linear(to-r, white, rgb(255, 255, 255))"}
        bgClip="text"
      >
        Activity Log
      </Text>

      <VStack align="stretch" spacing={2}>
        {logs.map((log, index) => (
          <Box key={index} p={2}>
            <Text>{log.message}</Text>
            <Text fontSize="sm" color={colorMode === "light" ? "gray.500" : "gray.400"}>
              {log.time}
            </Text>

            {/* Dividing Line */}
            {index !== logs.length - 1 && (
              <Box
                mt={2}
                borderBottom="1px solid"
                borderColor={colorMode === "light" ? "gray.300" : "gray.500"} // Darker in Dark Mode
              />
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ActivityLog;
