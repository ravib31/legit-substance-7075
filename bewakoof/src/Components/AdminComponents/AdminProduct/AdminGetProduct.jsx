import {
  Button,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsPencilFill } from "react-icons/bs";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct, } from "../../../Redux/Product/action";
import AdminProductShowCard from "./AdminProductShowCard";



const AdminGetProduct = () => {
  const { product } = useSelector(
    (store) => store.menReducer
  );

  console.log(product)

  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  // let total = Math.ceil(680 / 20);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div>
      <Heading textAlign={"center"}>Product</Heading>
      <Flex justifyContent={"flex-end"}>
        <Button
          variant={"solid"}
          bg={"green.700"}
          color={"white"}
          _hover={{
            bg: "#02B862",
          }}
          mb={"20px"}
          leftIcon={<MdAddCircleOutline />}
        >
          <Link to={"/admin/addProduct"}>Add Product</Link>
        </Button>
      </Flex>
      <TableContainer
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        bg={"white"}
        mt={"25px"}
        textAlign="center"
      >
        <Table variant={"simple"}>
          <Thead bg={"cyan.300"} fontWeight={"bold"}>
            <Tr>
              <Th>Image</Th>
              <Th>Product Name</Th>
              <Th>Product Price</Th>
              {/* <Th>Stocks</Th> */}
              <Th>Status</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {product.map((item) => (
              <AdminProductShowCard
                key={item.id}
                id={item.id}
                img={item.image[0] || item.image}
                title={item.title}
                price={item.discountedPrice}
                stocks={10}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* <Flex display={"flex"} overflowY={"scroll"} align={"center"} justifyContent={"center"} p={"25px"}>
        <Pagination
          totalPage={total}
          handlePageChange={(page) => setPage(page)}
          currentPage={page}
        />
      </Flex> */}
    </div>
  );
};

export default AdminGetProduct;
