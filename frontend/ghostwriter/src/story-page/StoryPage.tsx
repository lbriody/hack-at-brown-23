import { Heading, Box, Flex} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

function StoryPage() {
  const response = "This is an example story that will be replaced by one generated by the GPT Ghostwriter. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra porttitor enim quis dignissim. Donec id libero tellus. Aenean sed lacus turpis. Vestibulum vehicula, quam sit amet ultricies maximus, massa elit aliquet sapien, eu vestibulum magna tellus id turpis. Etiam sit amet felis mi. Etiam non vehicula dui. Nam id luctus lectus. Suspendisse potenti. Integer bibendum ligula magna, eget scelerisque eros mollis fermentum. Maecenas at quam erat. Nunc pretium nulla at nunc consequat, sed viverra dui luctus. Suspendisse justo neque, aliquet at ante id, luctus consectetur ligula. Etiam imperdiet, odio nec congue feugiat, tellus ex tempus ipsum, non dapibus arcu nulla ac erat. Cras scelerisque, risus a tristique eleifend, elit lectus maximus odio, eget ultrices justo turpis ut ipsum. \n Vivamus in lectus vel ipsum lobortis interdum. Fusce ac venenatis eros. Vestibulum convallis lacinia metus, ac blandit urna bibendum et. Quisque augue turpis, auctor ut accumsan ut, efficitur in felis. Nam neque enim, tempus quis tincidunt vitae, auctor in lacus. Proin vitae finibus massa. Aenean egestas turpis sit amet dui tempor condimentum non nec dolor. Mauris in congue diam, sed vulputate nibh. \n Nulla mollis purus eget erat facilisis, et gravida enim tempor. Quisque non dui metus. Aliquam ac bibendum sem. Sed posuere arcu id consectetur efficitur. Ut auctor eros eu ante cursus, sit amet placerat ligula interdum. Donec lacinia pharetra dolor in dictum. Nam suscipit semper eros ut scelerisque. Cras lacus arcu, aliquam eget augue quis, suscipit varius tortor. Nulla eu justo malesuada, pellentesque velit ut, efficitur nisi. Vivamus ultrices tempus enim, vel luctus tortor ullamcorper vitae. Pellentesque eleifend ante iaculis lacus condimentum, placerat aliquam diam eleifend. Praesent vitae suscipit libero. Praesent in odio dignissim mi luctus vehicula sit amet eu mauris. In suscipit volutpat purus, et euismod lorem congue sit amet. Quisque convallis risus et urna dignissim, vitae eleifend eros semper. \n Mauris ut dictum eros, a bibendum est. Quisque consectetur lacus nisi, id suscipit odio imperdiet a. Quisque non scelerisque dui, in accumsan turpis. Pellentesque massa mi, euismod vel enim et, ultrices dapibus felis. Pellentesque et scelerisque lacus, non molestie ante. Nam dolor felis, tempus ut ex at, porttitor fringilla mi. Maecenas convallis lectus volutpat nisl posuere sagittis. Morbi et euismod risus, quis elementum metus. Quisque luctus luctus diam, eu dictum mauris commodo et. Quisque id condimentum lacus. Curabitur laoreet semper purus, non malesuada nibh interdum non. Nam sollicitudin, nibh quis aliquam hendrerit, eros purus iaculis lectus, quis auctor nunc diam quis nunc. Sed nec finibus lectus, ut varius nibh. Nulla ultrices, justo sit amet elementum facilisis, sapien quam condimentum odio, ac gravida nibh nunc sed lacus. Sed rhoncus, metus feugiat elementum vestibulum, orci felis laoreet risus, at mollis tortor ligula at dui. Sed luctus dui eget consequat lacinia. \n Ut non dolor sed ipsum faucibus blandit a eget ex. Cras convallis sodales lacus vitae iaculis. Maecenas congue, turpis vel sodales condimentum, odio est suscipit nulla, ac cursus erat sapien pharetra erat. Cras eleifend ex sed aliquet pretium. Nam non pharetra sapien, quis mattis felis. Aenean tincidunt dapibus est, a blandit diam venenatis non. Vestibulum congue dui at fermentum pharetra. Maecenas lobortis aliquet nunc, sit amet faucibus ex imperdiet sed. Vestibulum ligula magna, rhoncus eu pretium vel, viverra malesuada erat. Curabitur vulputate maximus malesuada. Nulla elit lacus, ultrices sed pretium sed, ultrices et dui."
  const splitResponse = response.split(".");
  let pos = 0;

  const callback = () => {
    console.log('test')
    pos = pos + 1;
    if (pos < splitResponse.length) {
      const newText = document.createTextNode(splitResponse[pos]);
      return newText;
    } else {
      return null;
    }
  }

  return (
    <Box className="Story" ml="20" mr="20">
      
      <Flex className="Heading"
            bgSize = "cover"
            bgPosition="center -10"
            height= "100vh"
            align="center"
            justify= "center">

        <Heading fontSize="48" pos="absolute" top="20">GHOSTWRITER</Heading>
    
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
          
            
  );

} export default StoryPage;