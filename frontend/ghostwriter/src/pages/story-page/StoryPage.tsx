import { useEffect, useState } from "react"
import { Stack, Heading, Image, Button, Box, Text, Flex, Show} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import PostPage from '../post-page/PostPage'
import ChoiceComponant from "../choice-component/ChoiceComponent";
//import source from './black-50.jpeg';
import {dalle, GptCall, callType} from "../../OpenaiHandlers";
import zIndex from "@mui/material/styles/zIndex";
import { userDataMap } from "../post-page/PostPage";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { callExpression } from "@babel/types";

async function startStory() {
  const caller = new GptCall(userDataMap.get("names"), userDataMap.get("location"), userDataMap.get("storyType"));
  return await caller.call(callType.START)
}

function StoryPage() {
  const [response, setResponse] = useState<string>("startStory().then (response => { return response; })");
  const [source, setSource] = useState<string>(""); 
  const [isTyping, setIsTyping] = useState<boolean>(true);


  const callDallE = (par: string) => {
    dalle(par).then(
      response => {
        if (response === undefined) {
          console.log("ERROR");
        } else {
          setSource(response); //TODO: Update to book frame?
          console.log("WORKING");
          console.log(response);
        }
      }
    ).catch(() => {
      console.log(par); 
      console.log("ERROR");
    });
  }

  const generateWrapper = () =>  {
    return ( '<span className="Typewriter__wrapper"></span>' );
  }

  return (
    <Stack>
      <Box className="Login">
        <Flex 
        color='white'
          id = "dom-flex"
          className ="Login-header" 
          bg='black'
            padding={150}
            fontSize='29'
            fontWeight='bold'
          //bgImage={source} //MUST be imported this way, otherwise will break
          // //Chakra docs are WRONG^^^

          /**Uncomment to generate image */

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
          <Typewriter
            key={response}
            onInit={(typewriter) => {
              setIsTyping(true);
              // Parses reponse into paragraphs
              response.split('\n')
                      .map((par) => par.trim())
                      .filter((par) => {
                        if (!(par === "")) {
                          return true;
                        } else {
                          return false;
                        }})
                      // Maps paragraphs into strings to be typed and renders images via dall-e
                      .forEach((par) => {
                        typewriter.callFunction(() => { callDallE(par) }) 
                        typewriter.typeString(par)
                        typewriter.deleteAll()
                        typewriter.start();
                        setIsTyping(false);
              
              }
            )}}
            options = {{
              deleteSpeed: 0,
              delay: 75,
              cursor: "|",
            }}               
          /></Box>
          {/* { isTyping 
                  ? <ChoiceComponant></ChoiceComponant>
                  : null
              } */}

          {!isTyping && (
        <Box p="20px" bg="green.500" color="white">
          <ChoiceComponant></ChoiceComponant>
        </Box>
      )}
          
          </Flex>
        </Box>
      </Stack>
  );

}

export default StoryPage;