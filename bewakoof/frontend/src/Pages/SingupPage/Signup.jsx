import React, { useState } from "react";
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
import Toast from "../../Layout/useCustomToast";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showToast = useCustomToast();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("preview.png");

  const { name, email, password, phone } = user;

  const handleSignupForm = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      showToast(
        "Password length must be at least 8 characters",
        "warning",
        3000
      );
      return;
    }
    if (phone.length !== 10) {
      showToast("Phone number must be 10 digits", "warning", 3000);
      return;
    }

    if (!avatar) {
      showToast("Please select an avatar", "error", 3000);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("avatar", avatar);

    dispatch(register(formData));
  };

  const handleDataChange = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(file);
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

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
          <form onSubmit={handleSignupForm}>
            <InputGroup mb={"2"}>
              <InputLeftAddon children={<FaUserTie />} />
              <Input
                required
                type="text"
                name="name"
                placeholder=" Name"
                variant={"flushed"}
                onChange={handleDataChange}
                value={name}
              />
            </InputGroup>
            <InputGroup mb={"2"}>
              <InputLeftAddon children={<BsTelephoneFill />} />
              <Input
                type="number"
                name="phone"
                placeholder=" Phone"
                variant={"flushed"}
                onChange={handleDataChange}
                value={phone}
              />
            </InputGroup>
            <InputGroup mb={"2"}>
              <InputLeftAddon children={<MdEmail />} />
              <Input
                type="email"
                name="email"
                placeholder=" Email"
                variant={"flushed"}
                onChange={handleDataChange}
                value={email}
              />
            </InputGroup>
            <InputGroup mb={"2"}>
              <InputLeftAddon children={<RiLockPasswordFill />} />
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder=" Password"
                variant={"flushed"}
                onChange={handleDataChange}
                value={password}
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
            <Stack direction="row" alignItems="center">
              <Avatar src={avatarPreview} alt="Avatar" />
              <FormControl>
                <Input
                  name="avatar"
                  type="file"
                  accept="image/*"
                  onChange={handleDataChange}
                />
              </FormControl>
            </Stack>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
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
              Already a user? <Link href='http://localhost:3000/user/login' color={"blue.400"}>Login</Link>
            </Text>
          </Stack>
          <SocialMedia />
        </div>
      </SimpleGrid>
    </div>
  );
};

export default Signup;
