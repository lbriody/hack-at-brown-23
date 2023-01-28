import { useEffect, useState } from "react"
import { Stack, Heading, Image, Button, Box, Text, Flex} from '@chakra-ui/react';
import PostPage from '../post-page/PostPage'
import {dalle, text} from "../../OpenaiHandlers"


function StoryPage() {
  
    const [source, setSource] = useState<string>("");    


    // useEffect(() => {
    //   dalle("A fish flying over the rainbow").then(
    //     response => {
    //       if (response == undefined) {
    //         console.log("ERROR");
    //       } else {
    //         console.log("USEFFECT CALLED");
    //         setSource(response);
    //       }
    //     }
    //   )

    // });

    useEffect(() => {
      window.addEventListener("click",handleScroll);
      return () => {
        window.removeEventListener("click",handleScroll);
      }

    });

    const handleScroll = () => {
      dalle("A fish flying over the rainbow").then(
        response => {
          if (response == undefined) {
            console.log("ERROR");
          } else {
            console.log("USEFFECT CALLED");
            setSource(response);
          }
        }
      )
    }

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