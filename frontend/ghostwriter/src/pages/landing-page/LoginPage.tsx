import { useEffect, useState } from "react";
import { Stack, Heading, Image, Button, Box, Text, Flex} from '@chakra-ui/react';
import source from "./monster.jpeg";
import PostPage from '../post-page/PostPage';


function LoginPage() {


    return (
      <Stack>
        <Box className="Login">
              {/* If there is no token, show the login button. If there is a token, we don't need to log in again */}
              {/* {!window.localStorage.getItem("token") ? // if there is no token */}

              <Flex 
                className ="Login-header" 
                bg="#36454F" 
                bgImage={source} //MUST be imported this way, otherwise will break
                //Chakra docs are WRONG^^^
                bgSize = "cover"
                bgPosition="center -10"
                height= "100vh"
                align="center"
                justify= "left"
                padding= "5vw"
                >
                {/* add top tracks images here also think about what happens with errors*/}
              
                  
                <Heading fontSize="40" pos="absolute" top="120" left="130" color="white">Welcome to GhostWriter</Heading>
                <PostPage></PostPage>
                  
                </Flex>

              </Box>
            </Stack>
            
    );

}

export default LoginPage;