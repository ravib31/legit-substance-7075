import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminShowUserCard from "./AdminShowUserCard";
import axios from "axios";

const getUsers=async()=>{
  let res=await axios.get("https://gold-gifted-ladybug.cyclic.app/user");
  return res.data
}

const AdminGetUser = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    getUsers().then(res=>setData(res))
  },[])
  
  return (
    <Box marginBottom={"2rem"}>
      <Heading textAlign={"center"}>Users</Heading>
      <TableContainer
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        bg={"white"}
        mt={"25px"}
      >
        <Table variant={"simple"}>
          <Thead bg={"cyan.300"} fontWeight={"bold"}>
            <Tr>
              <Th>id</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length>0 && data.map((item) => (
              <AdminShowUserCard
                key={item._id}
                id={item._id}
                name={item.name}
                email={item.email}
                role={item.role}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminGetUser;
