import { FcGoogle } from "react-icons/fc";

import {loginWithGoogle} from '../../Redux/Auth/action'
import {useDispatch} from "react-redux"

import {  Button, Center, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

const SocialMedia = () => {
  const dispatch=useDispatch();

  const colorScheme = useBreakpointValue({ base: "green", sm: "yellow", md: "red" });
  const direction=useBreakpointValue({base:"column",md:"column",lg:"row"})

  const handleGoogleAuthentication=()=>{
    console.log("clicked");
    dispatch(loginWithGoogle)
  }

  return (
    <Center p={8}>
      <Stack spacing={2} align={"center"} maxW={"md"} w={"full"} >
        {/* Google */}
        <Button w={"full"} colorScheme={colorScheme} variant={"outline"} leftIcon={<FcGoogle />} onClick={handleGoogleAuthentication}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
        
      </Stack>
    </Center>
  );
};

export default SocialMedia;
