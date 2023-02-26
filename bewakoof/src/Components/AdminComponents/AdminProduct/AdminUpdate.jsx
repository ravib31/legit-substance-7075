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
import { useNavigate, useParams } from "react-router-dom";

const getSingleProduct=async(id)=>{
  try {
    let res=await axios.get(`https://wicked-tick-overshirt.cyclic.app/products/${id}`);
    console.log(res)
    return res.data
  } catch (error) {
    
  }
}

const AdminUpdate = () => {
  const {id}=useParams();
  const toast = useToast();
  const [product, setProduct] = useState({
    "id": 77,
    "type": "women",
    "image": [
      "https://images.bewakoof.com/t640/womens-mid-solid-kurta-318123-1663921315-1.jpg"
    ],
    "fit": "",
    "title": "Women's Yellow Mid Kurta",
    "discountedPrice": 355,
    "actualPrice": 1299,
    "loyaltyPrice": "₹329",
    "rating": 4.7,
    "category": "Kurta"
  });
  
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Updated",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    setTimeout(() => {
      navigate("/admin/product")
    }, 2000);
  };

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  useEffect(()=>{
    getSingleProduct(id).then((res)=>setProduct(res))
  },[])
  return (
    <div>
      <Heading textAlign={"center"} pt={"20px"}>
        Update Product
      </Heading>
      {<Flex justify={"center"} width={"100%"} bg={"whiteAlpha.800"} mt={"15"}>
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
                  name="actualPrice"
                  value={product.actualPrice}
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
                  name="image"
                  value={product.image[0]}
                  onChange={hanldeChange}
                  placeholder={"Image URL"}
                />
                <FormLabel>Type</FormLabel>
                <Input
                  type="text"
                  name="type"
                  value={product.type}
                  onChange={hanldeChange}
                  placeholder={"Type"}
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
                  name="discountedPrice"
                  value={product.discountedPrice}
                  onChange={hanldeChange}
                  placeholder={"Discounted Price"}
                />
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={hanldeChange}
                  placeholder={"Category"}
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
      </Flex>}
    </div>
  );
};

export default AdminUpdate;
