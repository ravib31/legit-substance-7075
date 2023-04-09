import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const AdminUpdate = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Updated",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  return (
    <div>
      <Heading textAlign={"center"} pt={"20px"}>
        Update Product
      </Heading>
      <Flex justify={"center"} width={"100%"} bg={"whiteAlpha.800"} mt={"15"}>
        <form
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "30px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <Stack
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
            width={{ base: "100%", sm: "100%" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl>
                <FormLabel>Product Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={hanldeChange}
                  placeholder={"Title"}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl>
                <FormLabel>Actual Price</FormLabel>
                <Input
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={hanldeChange}
                  placeholder={"Actual Price"}
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
            width={{ base: "100%", sm: "100%" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl>
                <FormLabel>Image</FormLabel>
                <Input
                  type="text"
                  name="img1"
                  value={product.image}
                  onChange={hanldeChange}
                  placeholder={"Image URL"}
                />
              </FormControl>
            </Box>
          </Stack>
        
          <Stack
            width={{ base: "100%", sm: "100%" }}
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl>
                <FormLabel>Discouted Price</FormLabel>
                <Input
                  type="text"
                  name="strike"
                  value={product.strike}
                  onChange={hanldeChange}
                  placeholder={"Discount Price"}
                />
              </FormControl>
            </Box>
          </Stack>
          <Stack
            spacing={10}
            pt={8}
            display={"flex"}
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "center", lg: "flex-end" }}
          >
            <Button
              width={{ base: "50%", sm: "50%", lg: "15%" }}
              size={"md"}
              bg={"green.700"}
              color={"white"}
              _hover={{
                bg: "#02B862",
              }}
              type={"submit"}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Flex>
    </div>
  );
};

export default AdminUpdate;
