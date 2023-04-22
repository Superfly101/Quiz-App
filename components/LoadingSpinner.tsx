import { Box, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Box mt="7rem">
      <Spinner speed="0.5s" thickness="4px" color="blue.500" size="xl" />;
    </Box>
  );
};

export default LoadingSpinner;
