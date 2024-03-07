import React from "react";
import { ChakraProvider, Box, Flex, VStack, HStack, Text, Input, IconButton, Button, Avatar, Spacer, Divider, Stack, useToast } from "@chakra-ui/react";
import { FaTwitter, FaFeatherAlt, FaRegComment, FaRetweet, FaHeart, FaShareSquare } from "react-icons/fa";

const Tweet = ({ username, content, avatar }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} bg="white">
      <HStack spacing={3}>
        <Avatar size="md" src={avatar} />
        <VStack align="start" spacing={1}>
          <Text fontWeight="bold">{username}</Text>
          <Text>{content}</Text>
          <HStack spacing={3}>
            <IconButton aria-label="Comment" icon={<FaRegComment />} size="sm" variant="ghost" colorScheme="blue" />
            <IconButton aria-label="Retweet" icon={<FaRetweet />} size="sm" variant="ghost" colorScheme="green" />
            <IconButton aria-label="Like" icon={<FaHeart />} size="sm" variant="ghost" colorScheme="red" />
            <IconButton aria-label="Share" icon={<FaShareSquare />} size="sm" variant="ghost" colorScheme="purple" />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

const Index = () => {
  const toast = useToast();
  const dummyTweets = [
    {
      id: 1,
      username: "justinbieber",
      content: "This is the first tweet!",
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk4MDU0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: 2,
      username: "katyperry",
      content: "This is another tweet!",
      avatar: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTgwNTQ1MHww&ixlib=rb-4.0.3&q=80&w=1080',
    },
    // Add more dummy tweets if needed
  ];

  const handleTweetSubmit = () => {
    // Handle tweet submit logic here
    toast({
      title: "Tweet posted!",
      description: "Your tweet was successfully posted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Box bg="gray.100" minH="100vh" p={8}>
        <VStack spacing={8}>
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <FaTwitter size="3rem" color="#1DA1F2" />
            <IconButton aria-label="New tweet" icon={<FaFeatherAlt />} size="lg" colorScheme="twitter" isRound onClick={handleTweetSubmit} />
          </Flex>
          <Box w="full" maxW="md" mx="auto">
            <Input placeholder="What's happening?" mb={4} />
            <Button leftIcon={<FaFeatherAlt />} colorScheme="twitter" w="full" onClick={handleTweetSubmit}>
              Tweet
            </Button>
            <Divider my={8} />
            <Stack spacing={4}>
              {dummyTweets.map((tweet) => (
                <Tweet key={tweet.id} {...tweet} />
              ))}
            </Stack>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
