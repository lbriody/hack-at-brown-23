import { useEffect, useState } from "react"
import { Stack, Heading, Image, Button, Box, Text, Flex, Show} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import PostPage from '../post-page/PostPage'
import ChoiceComponant from "../choice-component/ChoiceComponent";
<<<<<<< HEAD
import {dalle, GptCall, callType} from "../../OpenaiHandlers"
import { userDataMap } from "../post-page/PostPage";


function StoryPage() {
  // const names = new Array<string>;
  // names.push("colden");
  // names.push("maya");
  // names.push("luke");
  // const location = "milwaukee";
  // const storyType = StoryType.FUNNY;
  const caller = new GptCall(userDataMap.get("names"), userDataMap.get("location"), userDataMap.get("storyType"));
  const response = caller.call(callType.START)
    // const response = `
=======
import {dalle, gpt, StoryType } from "../../OpenaiHandlers"
import { eventWrapper } from "@testing-library/user-event/dist/utils";


function StoryPage() {
    const [response, setResponse] = useState<string>(`
>>>>>>> a3c2fd770ec968fa36884a906e7cccbc2b5b0c9d

    // John and Jane had been childhood friends, but ever since they had grown up, their paths had hardly crossed. So when Jane called John out of the blue to ask him to join her and her friend Jill for a camping trip in the woods, John eagerly accepted.
    
    // The three of them set off in the early morning, and despite the chilly air, they were in high spirits. It wasn’t long before they arrived at their destination. They set up camp, and before long, they were all gathered around the campfire, telling stories and roasting marshmallows.
    
    // As the night wore on, Jane and John started to feel a bit uneasy. They both had a strange feeling that someone or something was watching them. Even Jill, who normally was not one to be spooked, seemed to be on edge.
    
    // The three of them were starting to get ready to turn in for the night when they heard a loud, shrill scream coming from the woods. It sounded like it was coming from a woman. Jane and John looked at each other with wide eyes, and Jill, who had gone pale, spoke in a shaky voice.
    
    // “We should get out of here. Now.”
    
    // The three of them quickly packed up their things and started to make their way back towards the car. As they made their way through the darkness, they heard the same scream again, this time much closer. They started to run, but before they could make it to the car, they heard the sound of heavy footsteps behind them.
    
    // John and Jane both turned around, and were horrified to see a ghostly figure standing in the shadows. It was a woman, dressed in a long white dress and wearing a veil over her face. She was transparent, and her eyes were glowing in the darkness.
    
    // The three of them stopped in their tracks, frozen in fear. Then, the woman spoke in a low, haunting voice.
    
    // “You should not have come here. Leave now, or else you will become one of us.”
    
    // Without another word, the three of them turned and ran as fast as they could, not stopping until they made it back to the safety of their car.
    
<<<<<<< HEAD
    // John and Jane never spoke of the incident again, but ever since that night, they have both had a feeling that the woman in white was still out there in the woods, watching them from the shadows.`
=======
    John and Jane never spoke of the incident again, but ever since that night, they have both had a feeling that the woman in white was still out there in the woods, watching them from the shadows.`);
>>>>>>> a3c2fd770ec968fa36884a906e7cccbc2b5b0c9d
    
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
              key={response}
              onInit={(typewriter) => {
                setIsTyping(true);
<<<<<<< HEAD
                response.then( (res) =>{
                res.split('\n')
=======
                // Parses reponse into paragraphs
                response.split('\n')
>>>>>>> a3c2fd770ec968fa36884a906e7cccbc2b5b0c9d
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
<<<<<<< HEAD
                          .pauseFor(1000)
                          .deleteAll()
                          .start();
                        })})
=======
                          typewriter.deleteAll()
                          typewriter.start();
>>>>>>> a3c2fd770ec968fa36884a906e7cccbc2b5b0c9d
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