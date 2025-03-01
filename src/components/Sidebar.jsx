import React from "react";
import { Box, VStack, Link, Icon } from "@chakra-ui/react";
import { MdOutlineDashboard } from "react-icons/md";
import { FaDatabase, FaMap } from "react-icons/fa6";
import { RiSurveyLine } from "react-icons/ri";
import { IoLibraryOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <Box
      position="fixed"
      left="0"
      top="124px" 
      h="calc(100vh - 64px)"  
      w="200px"
      bg="#24080157"  
      color="white"
      p={5}
      boxShadow="lg"
    >
      <VStack align="start" spacing={5}>
        <Link 
       href="#"
          display="flex" 
          alignItems="center" 
          gap={3} 
          p={3} 
          w="full" 
          borderRadius="md"
          bg= "#8B4513"
          transform= "scale(1.05)" 
            boxShadow="0px 5px 10px rgba(0, 0, 0, 0.3)" 
        >
          <Icon as={MdOutlineDashboard} /> Dashboard
        </Link>

        <Link 
          href="#" 
          display="flex" 
          alignItems="center" 
          gap={3} 
          p={3} 
          w="full" 
          borderRadius="md"
          _hover={{ 
            bg: "#8B4513", 
            transform: "scale(1.05)", 
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" 
          }}
        >
          <Icon as={FaDatabase} /> Data Lab
        </Link>

        <Link 
          href="#" 
          display="flex" 
          alignItems="center" 
          gap={3} 
          p={3} 
          w="full" 
          borderRadius="md"
          _hover={{ 
            bg: "#8B4513", 
            transform: "scale(1.05)", 
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" 
          }}
        >
          <Icon as={RiSurveyLine} /> Surveys
        </Link>
        <Link 
          href="#" 
          display="flex" 
          alignItems="center" 
          gap={3} 
          p={3} 
          w="full" 
          borderRadius="md"
          _hover={{ 
            bg: "#8B4513", 
            transform: "scale(1.05)", 
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" 
          }}
        >
          <Icon as={IoLibraryOutline} /> Library
        </Link>
        <Link 
          href="#" 
          display="flex" 
          alignItems="center" 
          gap={3} 
          p={3} 
          w="full" 
          borderRadius="md"
          _hover={{ 
            bg: "#8B4513", 
            transform: "scale(1.05)", 
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" 
          }}
        >
          <Icon as={FaMap} /> Marketplace
        </Link>
        
      </VStack>
    </Box>
  );
}

export default Sidebar;
