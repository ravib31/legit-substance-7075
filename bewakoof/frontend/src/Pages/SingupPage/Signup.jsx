import React from "react";
import styles from "./Signup.module.css";

import {
  Box,
  FormControl,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { FaUserTie ,} from 'react-icons/fa';
import { MdEmail ,} from 'react-icons/md';
import { BsTelephoneFill ,} from 'react-icons/bs';
import { RiLockPasswordFill ,} from 'react-icons/ri';
import SocialMedia from "./SocialMedia";

const Signup = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftside}>
          <img
            src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png"
            alt="logo"
          />
        </div>
        <div>
          <header>
            <p>Signup</p>
            <>Hi new buddy, let's get you started with the bewakoofi!</>
          </header>
          <form action="" >
          <InputGroup >
              <InputLeftAddon children=<FaUserTie/> />
              <Input  type='text' placeholder=' Name' variant={"flushed"} />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children=<BsTelephoneFill/> />
              <Input type='number' placeholder=' Number' variant={"flushed"} />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children=<MdEmail/> />
              <Input type='email' placeholder=' Email' variant={"flushed"} />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children=<RiLockPasswordFill/> />
              <Input type='number' placeholder=' Password' variant={"flushed"} />
            </InputGroup>
          </form>
          <SocialMedia/>
        </div>
      </main>
    </div>
  );
};

export default Signup;
