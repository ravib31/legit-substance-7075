import React, { useEffect, useRef, useState } from "react";
import styles from "./Signup.module.css";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useCustomToast from "../../Layout/useCustomToast";
import { register } from "../../Redux/Auth/action";
import { useSelector, useDispatch } from "react-redux";

import {
  Avatar,
  Box,
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import SocialMedia from "./SocialMedia";
import Toast from "../../Layout/useCustomToast";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showToast = useCustomToast();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.authReducer);
  const { isError, msg, isAuth, isLoading } = store;
  const naviage = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    console.log({user});
  };
  

  const handleSignupForm = (e) => {
    e.preventDefault();

    if (user.password.length < 8) {
      showToast("Password length must be at least 8 characters", "warning", 3000);
      return;
    }
    if (user.phone.length !== 10) {
      showToast("Phone number must be 10 digits", "warning", 3000);
      return;
    }

    const formData={
      name:user.name,
      email:user.email,
      password:user.password,
      phone:user.phone
    }

    console.log(formData); 
    dispatch(register(formData));

      // Check if the registration was successful
      if (!isError && isAuth) {
        showToast("Signup successful! Verify your mail", "info", 9000);
        // Clear input fields and reset user state
        setUser({
          name: "",
          email: "",
          password: "",
          phone: "",
        });
      }
  };

  // const isFirstRender = useRef(true);
  // console.log(msg);
  // useEffect(() => {
  //   // if (!isFirstRender.current) {
  //     if (msg) {
  //       showToast("Verify your mail", "info", 9000);
  //     }
  //   // } 
  //   // else {

  //   //   isFirstRender.current = false;
  //   // }
  // }, []);

  const imageDisplay = useBreakpointValue({ base: "none", md: "block" });

  return (
    <div>
      <SimpleGrid
        className={styles.main}
        columns={[1, 1, 2, 2]}
        w={"80%"}
        margin={"auto"}
        gap={"10%"}
        mb={"100px"}
        mt={"10px"}
      >
        <div className={styles.leftside} style={{ display: imageDisplay }}>
          <img
            src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png"
            alt="logo"
          />
        </div>
        <div>
          <header>
            <p>Signup</p>
            <p>Hi new buddy, let's get you started with the bewakoofi!</p>
          </header>
          <form onSubmit={handleSignupForm}>
            <InputGroup mb={"2"}>
              <InputLeftAddon children={<FaUserTie />} />
              <Input
                required
                type="text"
                name="name"
                placeholder="Name"
                variant={"flushed"}
                onChange={handleDataChange}
                value={user.name}
              />
            </InputGroup>
            <InputGroup mb={"2"}>
              <InputLeftAddon children={<BsTelephoneFill />} />
              <Input
                type="number"
                name="phone"
                placeholder="Phone"
                variant={"flushed"}
                onChange={handleDataChange}
                value={user.phone}
              />
            </InputGroup>
            <InputGroup mb={"2"}>
              <InputLeftAddon children={<MdEmail />} />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                variant={"flushed"}
                onChange={handleDataChange}
                value={user.email}
              />
            </InputGroup>
            <InputGroup mb={"2"}>
              <InputLeftAddon children={<RiLockPasswordFill />} />
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                variant={"flushed"}
                onChange={handleDataChange}
                value={user.password}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() => setShowPassword((show) => !show)}
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                isLoading={isLoading}
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
          </form>
          <Stack pt={6}>
            <Text align={"center"}>
              Already a user? <Link to={"/user/login"} color={"blue.400"}>Login</Link>
            </Text>
          </Stack>
          <SocialMedia />
        </div>
      </SimpleGrid>
    </div>
  );
};

export default Signup;
