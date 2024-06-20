import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea, VStack, Text } from "@chakra-ui/react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Here you would typically send the post data to your backend server
    // For now, we'll just simulate a successful post creation
    try {
      // Simulate a successful post creation
      setSuccess("Post created successfully!");
    } catch (err) {
      setError("Failed to create post.");
    }
  };

  return (
    <Container maxW="container.sm" p={4}>
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Heading size="lg" mb={4}>Create a New Post</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="content" isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </FormControl>
            {error && <Text color="red.500">{error}</Text>}
            {success && <Text color="green.500">{success}</Text>}
            <Button type="submit" colorScheme="blue" width="full">Create Post</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;