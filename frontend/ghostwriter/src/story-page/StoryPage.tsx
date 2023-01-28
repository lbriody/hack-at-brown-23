import { useEffect, useState } from "react"
import { Stack, Heading, Image, Button, Box, Text, Flex} from '@chakra-ui/react';
import PostPage from '../post-page/PostPage'
import {dalle, text} from "../OpenaiHandlers"


function StoryPage() {
  


    const source = await dalle("a fish flying over a rainbow")
    

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
                </Flex>

              </Box>
            </Stack>
            
              
    );

}

export default StoryPage;