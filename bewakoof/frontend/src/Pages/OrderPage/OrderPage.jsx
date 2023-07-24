import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import SingleItem from './SingleItem'

const OrderPage = () => {
  return (
    <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
        <Box>
        <Heading >My Orders</Heading>

        </Box>
        <Box width={"60%"} margin={"auto"}>
            {[1,2,3,4].map((el,i)=>{
                return <SingleItem/>
            })}
        </Box>
    </Box>
  )
}

export default OrderPage