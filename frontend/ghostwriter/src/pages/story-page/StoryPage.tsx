import { useEffect, useState } from "react"
import { Stack, Heading, Image, Button, Box, Text, Flex} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import PostPage from '../post-page/PostPage'
import {dalle, text, StoryType } from "../../OpenaiHandlers"


function StoryPage() {

    const response = "This is an example story that will be replaced by one generated by the GPT Ghostwriter. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra porttitor enim quis dignissim. Donec id libero tellus. Aenean sed lacus turpis. Vestibulum vehicula, quam sit amet ultricies maximus, massa elit aliquet sapien, eu vestibulum magna tellus id turpis. Etiam sit amet felis mi. Etiam non vehicula dui. Nam id luctus lectus. Suspendisse potenti. Integer bibendum ligula magna, eget scelerisque eros mollis fermentum. Maecenas at quam erat. Nunc pretium nulla at nunc consequat, sed viverra dui luctus. Suspendisse justo neque, aliquet at ante id, luctus consectetur ligula. Etiam imperdiet, odio nec congue feugiat, tellus ex tempus ipsum, non dapibus arcu nulla ac erat. Cras scelerisque, risus a tristique eleifend, elit lectus maximus odio, eget ultrices justo turpis ut ipsum. \n Vivamus in lectus vel ipsum lobortis interdum. Fusce ac venenatis eros. Vestibulum convallis lacinia metus, ac blandit urna bibendum et. Quisque augue turpis, auctor ut accumsan ut, efficitur in felis. Nam neque enim, tempus quis tincidunt vitae, auctor in lacus. Proin vitae finibus massa. Aenean egestas turpis sit amet dui tempor condimentum non nec dolor. Mauris in congue diam, sed vulputate nibh. \n Nulla mollis purus eget erat facilisis, et gravida enim tempor. Quisque non dui metus. Aliquam ac bibendum sem. Sed posuere arcu id consectetur efficitur. Ut auctor eros eu ante cursus, sit amet placerat ligula interdum. Donec lacinia pharetra dolor in dictum. Nam suscipit semper eros ut scelerisque. Cras lacus arcu, aliquam eget augue quis, suscipit varius tortor. Nulla eu justo malesuada, pellentesque velit ut, efficitur nisi. Vivamus ultrices tempus enim, vel luctus tortor ullamcorper vitae. Pellentesque eleifend ante iaculis lacus condimentum, placerat aliquam diam eleifend. Praesent vitae suscipit libero. Praesent in odio dignissim mi luctus vehicula sit amet eu mauris. In suscipit volutpat purus, et euismod lorem congue sit amet. Quisque convallis risus et urna dignissim, vitae eleifend eros semper. \n Mauris ut dictum eros, a bibendum est. Quisque consectetur lacus nisi, id suscipit odio imperdiet a. Quisque non scelerisque dui, in accumsan turpis. Pellentesque massa mi, euismod vel enim et, ultrices dapibus felis. Pellentesque et scelerisque lacus, non molestie ante. Nam dolor felis, tempus ut ex at, porttitor fringilla mi. Maecenas convallis lectus volutpat nisl posuere sagittis. Morbi et euismod risus, quis elementum metus. Quisque luctus luctus diam, eu dictum mauris commodo et. Quisque id condimentum lacus. Curabitur laoreet semper purus, non malesuada nibh interdum non. Nam sollicitudin, nibh quis aliquam hendrerit, eros purus iaculis lectus, quis auctor nunc diam quis nunc. Sed nec finibus lectus, ut varius nibh. Nulla ultrices, justo sit amet elementum facilisis, sapien quam condimentum odio, ac gravida nibh nunc sed lacus. Sed rhoncus, metus feugiat elementum vestibulum, orci felis laoreet risus, at mollis tortor ligula at dui. Sed luctus dui eget consequat lacinia. \n Ut non dolor sed ipsum faucibus blandit a eget ex. Cras convallis sodales lacus vitae iaculis. Maecenas congue, turpis vel sodales condimentum, odio est suscipit nulla, ac cursus erat sapien pharetra erat. Cras eleifend ex sed aliquet pretium. Nam non pharetra sapien, quis mattis felis. Aenean tincidunt dapibus est, a blandit diam venenatis non. Vestibulum congue dui at fermentum pharetra. Maecenas lobortis aliquet nunc, sit amet faucibus ex imperdiet sed. Vestibulum ligula magna, rhoncus eu pretium vel, viverra malesuada erat. Curabitur vulputate maximus malesuada. Nulla elit lacus, ultrices sed pretium sed, ultrices et dui."
    const splitResponse = response.split(".");
    let pos = 0;
  
    const [source, setSource] = useState<string>("");    

    const callback = () => {
      // console.log('test')
      pos = pos + 1;
      if (pos < splitResponse.length) {
        const newText = document.createTextNode(splitResponse[pos]);
        return newText;
      } else {
        return null;
      }
    }

    
    const people = ["John (he/him)", "Jane (she/her)", "Jill (they/them)"];
    const location = "the woods";
    const storyType = StoryType.SPOOKY;

    
    useEffect(() => {
      window.addEventListener("click",handleClick);
      return () => {
        window.removeEventListener("click",handleClick);
      }

    });


    const sampleGpt = `

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

    const handleClick = () => {
      text("Sampletext").then(
        response => {
          if (response == undefined) {
            console.log("ERROR");
          } else {
            console.log("CLICKED")
            console.log(response);
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

                <Typewriter
                  options={{
                    strings: splitResponse,
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                    onCreateTextNode: () => {
                      let call = callback();
                      if (call != null) {
                        return call;
                      } else {
                        return null;
                      }
                    }
                  }}
                />

                </Flex>

              </Box>
            </Stack>
            
              
    );

}

export default StoryPage;