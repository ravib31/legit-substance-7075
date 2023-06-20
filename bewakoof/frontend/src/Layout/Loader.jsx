import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
  return (
    <Box padding='3' boxShadow='lg' bg='white'>
      <Skeleton width='100%' height='350px' />
      <SkeletonText mt='2' noOfLines={2} spacing='2' skeletonHeight='2' />
      
    </Box>
  );
};

export default Loader;
