import React from "react";
import { 
  Box, Flex, Image, Input, IconButton, Avatar, useColorMode 
} from "@chakra-ui/react";
import { 
  Search2Icon, BellIcon, SettingsIcon, MoonIcon, SunIcon 
} from "@chakra-ui/icons";

function TopNavigationBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = colorMode === "light" ? "#797979" : "white"; // Light Mode: Gray | Dark Mode: White

  return (
    <Box 
      bg={colorMode === "light" ? "#24080157" : "#2D3748"}  
      color="white"
      boxShadow="sm"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      p={3}
    >
      <Flex justify="space-between" align="center">
        {/* Left: Logo */}
        <Flex align="center" gap={5}>
          <Image src="/logo1.JPG" alt="Logo" h="50px" />
        </Flex>

        {/* Middle: Search Bar */}
        <Box position="relative" maxW="600px" w="100%">
          <Input 
            placeholder="Search..." 
            width="100%" 
            bg={colorMode === "light" ? "white" : "#4A5568"} 
            color={colorMode === "light" ? "black" : "white"}
            borderRadius="md"
            _placeholder={{ color: colorMode === "light" ? "#795548" : "#A0AEC0" }}
            pl="40px"
          />
          <IconButton 
            aria-label="Search"
            icon={<Search2Icon />} 
            position="absolute"
            left="10px"
            top="50%"
            transform="translateY(-50%)"
            bg="transparent"
            color={iconColor} 
            _hover={{ bg: "transparent" }}
          />
        </Box>

        {/* Right: Icons & Avatar */}
        <Flex align="center" gap={4}>
          <IconButton aria-label="Notifications" icon={<BellIcon />} color={iconColor} />
          <IconButton aria-label="Settings" icon={<SettingsIcon />} color={iconColor} />
          <IconButton 
            aria-label="Toggle Dark Mode" 
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode} 
            color={iconColor} 
          />
          <Avatar src="https://bit.ly/broken-link" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default TopNavigationBar;
