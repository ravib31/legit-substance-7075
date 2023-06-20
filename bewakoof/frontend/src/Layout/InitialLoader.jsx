import { Box, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const InitialLoader = () => {
  return (
    <Box padding='6' boxShadow='lg' bg='white'>
  
  <SkeletonText mt='4' noOfLines={10} spacing='4' skeletonHeight='40' />
</Box>
  )
}

export default InitialLoader