import React, { useState } from "react";
import styles from "./Signup.module.css";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import SocialMedia from "./SocialMedia";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <SimpleGrid
        className={styles.main}
        columns={[1, 2, 2]}
        w={"80%"}
        margin={"auto"}
        gap={"10%"}
        mb={"100px"}
        mt={"10px"}
      >
        <div className={styles.leftside}>
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
          <form action="">
            <InputGroup mb={"2"}>
              <InputLeftAddon children=<FaUserTie /> />
              <Input type="text" placeholder=" Name" variant={"flushed"} />
            </InputGroup>
            <InputGroup mb={"2"}>
              <InputLeftAddon children=<BsTelephoneFill /> />
              <Input type="number" placeholder=" Number" variant={"flushed"} />
            </InputGroup>
            <InputGroup mb={"2"} >
              <InputLeftAddon children=<MdEmail /> />
              <Input  type="email" placeholder=" Email" variant={"flushed"} />
            </InputGroup>
            <InputGroup mb={"2"} >
              <InputLeftAddon children=<RiLockPasswordFill /> />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder=" Password"
                variant={"flushed"}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Stack spacing={10} pt={2}>
              <Button
              
                loadingText="Submitting"
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
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          <SocialMedia />
        </div>
      </SimpleGrid>
    </div>
  );
};

export default Signup;
