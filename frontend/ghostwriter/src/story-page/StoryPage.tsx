import { useEffect, useState } from "react"
import { Stack, Heading, Image, Button, Box, Text, Flex} from '@chakra-ui/react';
import source from "./lost-places-pforphoto-leave-factory-158229.webp";
import PostPage from '../post-page/PostPage'


function StoryPage() {
    const CLIENT_ID = "0dfecd40e87344e0adf73728e2317442"
    const REDIRECT_URI = "http://localhost:3000/top-genres/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    return (
      <Stack>
        <Box className="Login">
              {/* If there is no token, show the login button. If there is a token, we don't need to log in again */}
              {/* {!window.localStorage.getItem("token") ? // if there is no token */}

              <Flex 
                className ="Login-header" 
                bg="#EFE7FC" 
                bgImage={source} //MUST be imported this way, otherwise will break
                //Chakra docs are WRONG^^^
                bgSize = "cover"
                bgPosition="center -10"
                height= "100vh"
                align="center"
                justify= "center"
                >
                {/* add top tracks images here also think about what happens with errors*/}
              
                  
                <Heading fontSize="48" pos="absolute" top="20">TYPING TEXT HERE</Heading>
                <PostPage></PostPage>
                  
                </Flex>

              </Box>
            </Stack>
            
              
    );

}

export default StoryPage;