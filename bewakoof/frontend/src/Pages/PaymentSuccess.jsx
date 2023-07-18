import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { redirect, useSearchParams ,Navigate,useNavigate} from "react-router-dom"


const PaymentSuccess = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        console.log("clicked");
        <Navigate to={"/"}/>
        navigate("/")
    }
    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}> Order Successfull</Heading>

                <Text>
                    Reference No.{referenceNum}
                </Text>

                <Button onClick={handleClick}>Shop More</Button>

            </VStack>
        </Box>
    )
}

export default PaymentSuccess