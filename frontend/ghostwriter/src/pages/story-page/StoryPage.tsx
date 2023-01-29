import { useEffect, useState } from "react"
import { Stack, Heading, Image, Button, Box, Text, Flex, Show} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import PostPage from '../post-page/PostPage'
import ChoiceComponant from "../choice-component/ChoiceComponent";
import {dalle, gpt, StoryType } from "../../OpenaiHandlers"


function StoryPage() {
    const response = `

    John and Jane had been childhood friends, but ever since they had grown up, their paths had hardly crossed. So when Jane called John out of the blue to ask him to join her and her friend Jill for a camping trip in the woods, John eagerly accepted.
    
    The three of them set off in the early morning, and despite the chilly air, they were in high spirits. It wasn’t long before they arrived at their destination. They set up camp, and before long, they were all gathered around the campfire, telling stories and roasting marshmallows.
    
    As the night wore on, Jane and John started to feel a bit uneasy. They both had a strange feeling that someone or something was watching them. Even Jill, who normally was not one to be spooked, seemed to be on edge.
    
    The three of them were starting to get ready to turn in for the night when they heard a loud, shrill scream coming from the woods. It sounded like it was coming from a woman. Jane and John looked at each other with wide eyes, and Jill, who had gone pale, spoke in a shaky voice.
    
    “We should get out of here. Now.”
    
    The three of them quickly packed up their things and started to make their way back towards the car. As they made their way through the darkness, they heard the same scream again, this time much closer. They started to run, but before they could make it to the car, they heard the sound of heavy footsteps behind them.
    
    John and Jane both turned around, and were horrified to see a ghostly figure standing in the shadows. It was a woman, dressed in a long white dress and wearing a veil over her face. She was transparent, and her eyes were glowing in the darkness.
    
    The three of them stopped in their tracks, frozen in fear. Then, the woman spoke in a low, haunting voice.
    
    “You should not have come here. Leave now, or else you will become one of us.”
    
    Without another word, the three of them turned and ran as fast as they could, not stopping until they made it back to the safety of their car.
    
    John and Jane never spoke of the incident again, but ever since that night, they have both had a feeling that the woman in white was still out there in the woods, watching them from the shadows.`
    
    const [source, setSource] = useState<string>(""); 
    const [parNum, setParNum] = useState<number>(0);
    const [isTyping, setIsTyping] = useState<boolean>(true);

    const callDallE = (par: string) => {
      dalle(par).then(
        response => {
          if (response === undefined) {
            console.log("ERROR");
          } else {
            setSource(response); //TODO: Update to book frame?
            setParNum(parNum + 1);
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
      <Stack>
        <Box className="Login">
          <Flex 
            id = "dom-flex"
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
            
            <Heading fontSize="48" pos="absolute" top="20">GHOSTWRITER</Heading>
            
            <Typewriter
              onInit={(typewriter) => {
                setIsTyping(true);
                response.split('\n')
                        .map((par) => par.trim())
                        .filter((par) => {
                          if (!(par === "")) {
                            return true;
                          } else {
                            return false;
                          }})
                        .forEach((par) => {
                          typewriter.callFunction(() => { callDallE(par) })
                          // let newParNum = parNum + 1;
                          // while (newParNum !=  parNum) {
                          //   typewriter.pauseFor(100);
                          // }                          
                          typewriter.typeString(par)
                          .pauseFor(1000)
                          .deleteAll()
                          .start();
                        })
                setIsTyping(false);
                }
              }
              options = {{
                deleteSpeed: 2,
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