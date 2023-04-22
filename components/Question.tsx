import { Heading, Text, Button, Stack } from "@chakra-ui/react";

const Question = () => {
  return (
    <Stack spacing="4">
      <Heading size="lg" textAlign="center">
        Question 1
      </Heading>
      <Text size="lg">Is this the question?</Text>

      <Stack w="full">
        <Button colorScheme="blue" variant="outline">
          Answer 1
        </Button>
        <Button colorScheme="blue" variant="outline">
          Answer 2
        </Button>
        <Button colorScheme="blue" variant="outline">
          Answer 3
        </Button>
        <Button colorScheme="blue" variant="outline">
          Answer 4
        </Button>
      </Stack>
    </Stack>
  );
};
export default Question;
