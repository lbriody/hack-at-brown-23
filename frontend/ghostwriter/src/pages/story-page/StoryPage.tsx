import { useState } from "react"
import { Stack, Heading, Box, Flex} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import ChoiceComponant from "../choice-component/ChoiceComponent";
import {dalle, GptCall, callType} from "../../OpenaiHandlers"
import { userDataMap } from "../post-page/PostPage";

async function startStory() {
  const caller = new GptCall(userDataMap.get("names"), userDataMap.get("location"), userDataMap.get("storyType"));
  return await caller.call(callType.START)
}

function StoryPage() {
  const [optNum, setOptNum] = useState<number>(0);
  const [responsePromise, setResponsePromise] = useState<Promise<string>>(startStory());
  const [response, setResponse] = useState<string>("");
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

  const getResponse = () => {
    if (responsePromise === undefined) {
      console.log("ERROR");
    } else {
      responsePromise.then((res) =>{
        setResponse(res)
        console.log("WORKING");
        console.log(response);
      })
    }
  }

  return (
    <Stack>
      <Box className="Login">
        <Flex 
        color='white'
          id = "dom-flex"
          className ="Login-header" 
          bg='black'
          bgImage={source} //MUST be imported this way, otherwise will break
          //Chakra docs are WRONG^^^
          bgSize = "cover"
          bgPosition="center -10"
          height= "100vh"
          align="center"
          justify= "center"
        >          
          
          <Heading fontSize="48" pos="absolute" top="20">GHOSTWRITER</Heading>
          
          <Typewriter
            key={optNum}
            onInit={(typewriter) => {
              setIsTyping(true);
              // Parses reponse into paragraphs
              getResponse()
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
              cursor: "|"
            }}               
          />
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