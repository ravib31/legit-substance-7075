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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const addProduct=async(data)=>{
  try {
    await axios.post("https://wicked-tick-overshirt.cyclic.app/products",data)
  } catch (error) {
    console.log(error)
  }
}

const AdminAddProduct = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product)
    addProduct(product);
    toast({
      title: "Product Added",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    setTimeout(() => {
      
      navigate("/admin/product")
    }, 1000);
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
        Add Product
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
              <FormControl isRequired>
                <FormLabel>Product Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  onChange={hanldeChange}
                  placeholder={"Title"}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Actual Price</FormLabel>
                <Input
                  type="text"
                  name="actualprice"
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
              <FormControl isRequired>
                <FormLabel>Image</FormLabel>
                <Input
                  type="text"
                  name="image"
                  onChange={hanldeChange}
                  placeholder={"Image URL"}
                />
              </FormControl>
            </Box>
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Select option"
                  onChange={hanldeChange}
                  name="category"
                >
                  <option value="T-shirt">T-shirt</option>
                  <option value="Joggers">Joggers</option>
                  <option value="Pyjama">Pyjama</option>
                  <option value="Jacket">Jacket</option>
                  <option value="Kurta">Jacket</option>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Stack
            width={{ base: "100%", sm: "100%" }}
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Type</FormLabel>
                <Select
                  placeholder="Select option"
                  onChange={hanldeChange}
                  name="type"
                >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </Select>
              </FormControl>
            </Box>
            
          </Stack>
          <Stack
            width={{ base: "100%", sm: "100%" }}
            spacing={"10"}
            direction={{ base: "column", sm: "row" }}
          >
            <Box width={{ base: "100%", sm: "100%" }}>
              <FormControl isRequired>
                <FormLabel>Discount Price</FormLabel>
                <Input
                  type="text"
                  name="discountedPrice"
                  onChange={hanldeChange}
                  placeholder={"Discount price "}
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

export default AdminAddProduct;
