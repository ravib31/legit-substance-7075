// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Image,
//   Input,
//   Stack,
//   useToast,
// } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// // import { adminLogin } from "../../redux/AdminLogin/adminLogin.action";
// import { useLocation, useNavigate } from "react-router-dom";
// import { LoginPost } from "../../../Redux/Auth/Auth.action";

// const AdminLogin = () => {
//   const dispatch = useDispatch();
//   const { isAuth, token ,data } = useSelector((store) => store.auth);

//   // console.log(isAuth, token ,data)
  
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")

//   const navigateTo = useNavigate();
//   const toast = useToast();
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = { email, password };

//     fetch("https://gold-gifted-ladybug.cyclic.app/user/login", {
//       method: "POST",
//       body: JSON.stringify(payload),
//       headers: {
//         "Content-type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         localStorage.setItem("token", res.token);
//         if (localStorage.getItem("token")) {
//           localStorage.setItem("email", payload.email);
//           setTimeout(() => {
//             toast({
//               position: "bottom-left",
//               render: () => (
//                 <Box color="white" p={3} bg="blue.500">
//                   {`welcome ${email} `}
//                 </Box>
//               ),
//             });
//           }, 1000);
//           navigateTo("/admin");
//         } else if(!payload.password){
//           toast({
//             position: "bottom-left",
//             render: () => (
//               <Box color="white" p={3} bg="blue.500">
//                 {`Wrong password`}
//               </Box>
//             ),
//           });
//     }
//         else {
//           toast({
//             position: "bottom-left",
//             render: () => (
//               <Box color="white" p={3} bg="blue.500">
//                 {`please register first`}
//               </Box>
//             ),
//           });
//         }
//       })
//       .catch((err) => console.log(err));


//   };
//   useEffect(() => {
//     if (isAuth) {
//       if (state.form) {
//         naviget(state.form, { replace: true });
//       } else {
//         naviget("/admin");
//         toast({
//           title: "Success",
//           description: "Welcome To The Admin Dashboard",
//           status: "success",
//           duration: 2000,
//           position: "top",
//           isClosable: true,
//         });
//       }
//     }

//   //   if (error) {
//   //     toast({
//   //       title: "Something Went Wrong ",
//   //       description: "You Are Note Admin & Enter Right Credential",
//   //       status: "error",
//   //       duration: 2000,
//   //       position: "top",
//   //       isClosable: true,
//   //     });
//   //   }
//   }, [isAuth]);
//   return (
//     <div>
//       <Flex
//         minH={"100vh"}
//         align={"center"}
//         justify={"center"}
//         //   bg={useColorModeValue('gray.50', 'gray.800')}
//       >
//         <Stack
//           spacing={6}
//           w={"full"}
//           maxW={"md"}
//           // bg={useColorModeValue('white', 'gray.700')}
//           rounded={"xl"}
//           boxShadow={"lg"}
//           p={5}
//           my={12}
//           alignItems={"center"}
//         >
//           <Image
//             src={
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlr4ZxBMXg0EyDACXUmTAkddbEqub6A0eE8Q&usqp=CAU"
//             }
//             width={"30%"}
//           />
//           <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
//             Admin
//           </Heading>
//           <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//             <FormControl id="email" isRequired pb={"20px"}>
//               <FormLabel fontSize={"18px"}>Email address</FormLabel>
//               <Input
//                 placeholder="your-email@dailysope.com"
//                 _placeholder={{ color: "gray.500" }}
//                 type="email"
//                 value={email}
//                 onChange={(e)=>setEmail(e.target.value)}
//               />
//             </FormControl>
//             <FormControl id="password" isRequired pb={"20px"}>
//               <FormLabel fontSize={"18px"}>Password</FormLabel>
//               <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
//             </FormControl>
//             <Stack spacing={6} alignItems={"center"}>
//               <Button
//                 width={"200px"}
//                 bg={"green.700"}
//                 color={"white"}
//                 _hover={{
//                   bg: "green.600",
//                 }}
//                 type="submit"
//               >
//                 Login
//               </Button>
//             </Stack>
//           </form>
//         </Stack>
//       </Flex>
//     </div>
//   );
// };

// export default AdminLogin;
