import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import {  Button, Center, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

const SocialMedia = () => {

  const colorScheme = useBreakpointValue({ base: "green", sm: "yellow", md: "red" });
  const direction=useBreakpointValue({base:"column",md:"column",lg:"row"})

  return (
    <Center p={8}>
      <Stack spacing={2} align={"center"} maxW={"md"} w={"full"} >
        {/* Google */}
        <Button w={"full"} colorScheme={colorScheme} variant={"outline"} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
        {/* Facebook */}
        <Button w={"full"} colorScheme={"facebook"} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
};

export default SocialMedia;
