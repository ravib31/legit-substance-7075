import {
  Box,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

import React from "react";

const SingleProductLoader = () => {
  return (
    <SimpleGrid
      width={"80%"}
      mb={"200px"}
      ml={"10%"}
      mr={"10%"}
      columns={[1, 2]}
      justifyContent={"center"}
      gap={"5%"}
    >
      <Box boxShadow="lg" bg="white" display={"flex"} gap={"3%"} padding={"3%"}>
        <Box
          height={"80vh"}
          width={"15%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"5px"}
          style={{ flex: "1" }} 
        >
          <Skeleton height={"300px"} />
          <Skeleton height={"300px"} />
          <Skeleton height={"300px"} />
          <Skeleton height={"300px"} />
          <Skeleton height={"300px"} />
        </Box>
        <Box width="80%" boxShadow="lg" bg="white" >
          <Skeleton height="80vh" />
        </Box>
      </Box>
      <Box boxShadow="lg" bg="white" padding={"3%"}>
        <SkeletonText mt="4" noOfLines={19} spacing="4" skeletonHeight="5" />
      </Box>
    </SimpleGrid>
  );
};

export default SingleProductLoader;
