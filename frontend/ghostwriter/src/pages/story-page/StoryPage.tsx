import { useEffect, useState } from "react"
import { Stack, Heading, Image, Button, Box, Text, Flex, Show} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import PostPage from '../post-page/PostPage'
import ChoiceComponant from "../choice-component/ChoiceComponent";
//import source from './black-50.jpeg';
import {dalle, GptCall, callType, gpt} from "../../OpenaiHandlers";
import zIndex from "@mui/material/styles/zIndex";
import { userDataMap } from "../post-page/PostPage";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { callExpression } from "@babel/types";
import {FlexTypeWriter} from "./TypeWriter";



function StoryPage() {
  // const [response, setResponse] = useState<string>("");
  // const [source, setSource] = useState<string>(""); 
  const [isTyping, setIsTyping] = useState<boolean>(true);

  // const result: Promise<string> = handleStory();
  // result.then((response) => {
  //   setResponse(response);
  // });


  // const callDallE = (par: string) => {
  //   dalle(par).then(
  //     response => {
  //       if (response === undefined) {
  //         console.log("ERROR");
  //       } else {
  //         setSource(response); //TODO: Update to book frame?
  //         console.log("WORKING");
  //         console.log(response);
  //       }
  //     }
  //   ).catch(() => {
  //     console.log(par); 
  //     console.log("ERROR");
  //   });
  // }


  return (
    <Stack>
      <Box className="">
        <Flex 
        color='white'
          id = "dom-flex"
          className ="header" 
          bg='black'
            padding={150}
            fontSize='29'
            fontWeight='bold'
          //bgImage={source} //MUST be imported this way, otherwise will break
          // //Chakra docs are WRONG^^^
          bgSize = "cover"
          bgPosition="center -10"
          height= "100vh"
          align="center"
          justify= "center"
        >          
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          alt= 'dang it'
            width='100vw'
            height='100vh'
            opacity={'50%'}
            position='absolute'
            zIndex={1}
            />
          <Box zIndex={2}>
          <FlexTypeWriter callType={callType.START} />
          </Box>
          { isTyping 
                  ? <ChoiceComponant></ChoiceComponant>
                  : null
              }

          {/* <Show breakpoint= {{isTyping}}>
            <ChoiceComponant></ChoiceComponant>
          </Show> */}
          
          </Flex>
        </Box>
      </Stack>
  );

}

export default StoryPage;