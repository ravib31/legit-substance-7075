import { Box, Container } from "@chakra-ui/react";
import React from "react";
import AdminGetUser from "../../AdminComponents/AdminShowUserData/AdminGetUser";

const AdminShowUser = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Box minH="100vh" bg={"gray.100"}>
        <Container maxW={"80%"} margin={"auto"} mr={"20px"}>
          <AdminGetUser />
        </Container>
      </Box>
    </div>
  );
};

export default AdminShowUser;
