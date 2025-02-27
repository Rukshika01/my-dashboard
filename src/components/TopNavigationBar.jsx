import React from "react";
import { 
  Box, Flex, Image, Input, IconButton, Tooltip, Avatar, useColorMode 
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
          <Tooltip label="Search" hasArrow>
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
          </Tooltip>
        </Box>

        {/* Right: Icons & Avatar */}
        <Flex align="center" gap={4}>
        <Tooltip label="Notifications" hasArrow>
          <IconButton aria-label="Notifications" icon={<BellIcon />} color={iconColor} />
          </Tooltip>
          <Tooltip label="Settings" hasArrow>  
          <IconButton aria-label="Settings" icon={<SettingsIcon />} color={iconColor} />
          </Tooltip>
          <Tooltip label="Change Theme" hasArrow>
          <IconButton 
            aria-label="Toggle Dark Mode" 
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode} 
            color={iconColor} 
          />
          </Tooltip>
          <Tooltip label="My Profile" hasArrow>
          <Avatar src="https://bit.ly/broken-link" />
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
}

export default TopNavigationBar;
