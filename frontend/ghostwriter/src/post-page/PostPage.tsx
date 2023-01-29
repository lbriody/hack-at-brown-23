import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Divider,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';

import { getDatabase, ref, set } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Dispatch, useState, SetStateAction } from 'react';
import {OptionBase, GroupBase} from "chakra-react-select";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfndB5EZzaDT3sjvJGSV5PMf7XL-b40Q0",
  authDomain: "cs32-final-project-cblhckem.firebaseapp.com",
  databaseURL: "https://cs32-final-project-cblhckem-default-rtdb.firebaseio.com",
  projectId: "cs32-final-project-cblhckem",
  storageBucket: "cs32-final-project-cblhckem.appspot.com",
  messagingSenderId: "683525008744",
  appId: "1:683525008744:web:72cf76f696007f7b0c3add"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




function writeEnum(nameInput1: string, nameInput2: string, nameInput3: string, 
  nameInput4: string, nameInput5: string, cityInput: string, ) {
    // TODO: write this function
}


function writeNewEvent(eventId: Number, eventName: string, eventLink: string, 
  eventImage: string, eventDescription: string, eventFeaturing: string,
  eventEpoch: Number, eventCity: string,
  eventVenue: string, eventGenre1: string, eventGenre2: string) {
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
  set(ref(db, 'events/events/' + eventId), {
      eventname: eventName,
      city: eventCity,
      description: eventDescription,
      epoch: eventEpoch,
      eventId: eventId,
      image: eventImage,
      performer: eventFeaturing,
      venue: eventVenue,
      link: eventLink,
    
});
  set(ref(db, 'events/events/' + eventId +'/genres/0/'), {
    name: eventGenre1, //TODO: Fix this to handle multiple genres
  });

  set(ref(db, 'events/events/' + eventId +'/genres/1/'), {
    name: eventGenre2, 
  });


}

interface ControlledInputProps {
  value: string, 
  setValue: Dispatch<SetStateAction<string>>,
  ariaLabel: string 
}

function ControlledInput({value, setValue, ariaLabel}: ControlledInputProps) {
  return (
      <Input id='events-user-input' value={value} 
              onChange={(ev) => setValue(ev.target.value)}
              type="text"
              bgColor="black"
              aria-label={ariaLabel}
      ></Input>
      )
  }

// const storyOptions = [{value:'option1', label:"Funny"}, {value:'option2', label:"Scary"}, 
// {value:'option4', label:"Eldrich"}, {value:'option3', label:"Scary"},  {value:'option5', label:"Morbid"}, 
// {value:'option6', label:"Youtuber apology video"}, {value:'option7', label:"Saw"}, {value:'option8', label:"Emo"}];


// interface StoryOption extends OptionBase {
//   label: string;
//   value: string; 
// }



export default function SimpleCard() {
  const [nameInput1, setNameInput1] = useState<string>("")
  const [nameInput2, setNameInput2] = useState<string>("")
  const [nameInput3, setNameInput3] = useState<string>("")
  const [nameInput4, setNameInput4] = useState<string>("")
  const [nameInput5, setNameInput5] = useState<string>("")
  const [imageInput, setImageInput] = useState<string>("")
  const [linkInput, setLinkInput] = useState<string>("")
  const [descriptionInput, setDescriptionInput] = useState<string>("")
  const [featuringInput, setFeaturingInput] = useState<string>("")
  const [dateInput, setDateInput] = useState<string>("")
  const [cityInput, setCityInput] = useState<string>("")
  const [venueInput, setVenueInput] = useState<string>("")
  const [genre1Input, setGenre1Input] = useState<string>("")
  const [genre2Input, setGenre2Input] = useState<string>("")
  const [selectedStory, setSelectedStory] = useState("")

  // const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
  //   if(event && event.target) {
  //     setSelectedStory(event.target.value);
  //   }
  // }

  return (
    <Box>
    <Flex
      align={'center'}
      justify={'center'}
      color={'white'}
      paddingTop={'70'}
      >
      <Stack spacing={8} mx={'auto'} maxW={900} py={12} px={6}>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel fontSize="18" fontWeight="bold">What are your names? (Can also include pronouns, e.g. "Jane Doe (She/Her)", "Quinn", "Johnny (He/Him)")</FormLabel>
              <ControlledInput value={nameInput1} setValue={setNameInput1} ariaLabel={"name1"}/>
              <ControlledInput value={nameInput2} setValue={setNameInput2} ariaLabel={"name2"}/>
              <ControlledInput value={nameInput3} setValue={setNameInput3} ariaLabel={"name3"}/>
              <ControlledInput value={nameInput4} setValue={setNameInput4} ariaLabel={"name4"}/>
              <ControlledInput value={nameInput5} setValue={setNameInput5} ariaLabel={"name5"}/>
            </FormControl>
            <FormControl id="location">
              <FormLabel fontSize="18" fontWeight="bold">Setting (e.g. "Kentucky", "International Waters")</FormLabel>
              <ControlledInput value={cityInput} setValue={setCityInput} ariaLabel={"city"}/>
            </FormControl>
            <FormControl id="Vibe">
              <FormLabel fontSize="18" fontWeight="bold">Vibe</FormLabel>
            </FormControl>
            <Select
                value={selectedStory}
                onChange={event => setSelectedStory(event.target.value)}>
                <option value='option1'>Funny</option>
                <option value='option2'>Romantic</option>
                <option value='option3'>Scary</option>
                <option value='option4'>Eldrich</option>
                <option value='option5'>Morbid</option>
                <option value='option6'>Youtuber apology video</option>
                <option value='option7'>Saw</option>
                <option value='option8'>Emo</option>
            </Select>

            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox fontSize="18">I am not a murderer or a bot</Checkbox>
              </Stack>
              <Button
              fontSize="17"
              width={220}
              height={50}
                bg={'white'}
                borderRadius={'2xl'}
                color={'black'}
                _hover={{
                  bg: 'grey',
                }}
                onClick={() => {
                  const id = Math.round(Math.random()*999999) //noncontinuous
                  writeNewEvent(5, nameInput1, linkInput, imageInput, descriptionInput, featuringInput, 1671974193, cityInput,venueInput, "rap", "soul")
                  writeEnum(nameInput1, nameInput2, nameInput3, nameInput4, nameInput5, cityInput, )
                      }
                  }
                >
                Tell me a story
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    </Box>
  );
}