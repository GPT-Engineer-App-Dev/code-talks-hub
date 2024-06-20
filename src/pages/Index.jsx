import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaLaptopCode, FaRobot, FaDatabase, FaUserPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Tech Forum</Heading>
        <Flex>
          <Link href="/" p={2} display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link href="#" p={2} display="flex" alignItems="center">
            <FaLaptopCode />
            <Text ml={2}>Programming</Text>
          </Link>
          <Link href="#" p={2} display="flex" alignItems="center">
            <FaRobot />
            <Text ml={2}>AI</Text>
          </Link>
          <Link href="#" p={2} display="flex" alignItems="center">
            <FaDatabase />
            <Text ml={2}>Databases</Text>
          </Link>
          <Link href="/register" p={2} display="flex" alignItems="center">
            <FaUserPlus />
            <Text ml={2}>Register</Text>
          </Link>
        </Flex>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md">Welcome to the Tech Forum</Heading>
          <Text mt={2}>Discuss the latest in technology, programming, AI, and databases.</Text>
        </Box>

        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md">Programming</Heading>
          <Text mt={2}>Share your programming knowledge and ask questions.</Text>
        </Box>

        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md">Artificial Intelligence</Heading>
          <Text mt={2}>Discuss the latest trends and research in AI.</Text>
        </Box>

        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md">Databases</Heading>
          <Text mt={2}>Talk about database management systems and best practices.</Text>
        </Box>
      </VStack>

      <Flex as="footer" bg="gray.700" color="white" p={4} mt={8} justifyContent="center">
        <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;