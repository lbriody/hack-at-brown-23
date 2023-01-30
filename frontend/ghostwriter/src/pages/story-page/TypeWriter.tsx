
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

async function startStory(): Promise<string>{
  // const caller = new GptCall(userDataMap.get("names"), userDataMap.get("location"), userDataMap.get("storyType"));
  var names = ["jan", "elliot", "seb", "poetica", "jerry"];
  const caller = new GptCall(names, "paris", "scary");
  return await "hello friends" //caller.call(callType.START);
//   return await caller.call(callType.START)
}

async function handleStory(): Promise<string> {
  const response = await startStory();
  console.log(response)
  return response;
}

interface FlexTypeWriterProps {
  callType: callType;
}
 

const FlexTypeWriter: React.FC<FlexTypeWriterProps> = ({ callType }) => {

  const [response, setResponse] = useState<string>("");
  const [source, setSource] = useState<string>(""); 
  const [isTyping, setIsTyping] = useState<boolean>(true);

  const result: Promise<string> = handleStory();
  result.then((response) => {
    setResponse(response);
  });

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

  return (
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
            />
  )
}

export {FlexTypeWriter}