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
    const REDIRECT_URI = "http://localhost:3000/story/"
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

// function writeGenresData(eventGenres: string[]) {
// const db = getDatabase();
//   set(ref(db, 'events/genres' + eventId), {
//       genres: eventGenres,

// });
// }

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
              aria-label={ariaLabel}
      ></Input>
      )
  }





export default function SimpleCard() {
  const [nameInput, setNameInput] = useState<string>("")
  const [cityInput, setCityInput] = useState<string>("")
  const [selectedValue, setSelectedValue] = useState("");

  const CLIENT_ID = "0dfecd40e87344e0adf73728e2317442"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const REDIRECT_URI = "http://localhost:3000/story/"

  return (
    <Box>
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Text fontSize={'lg'} color={'gray.600'}>
            Spooky Scary
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Tell me your name :)</FormLabel>
              <ControlledInput value={nameInput} setValue={setNameInput} ariaLabel={"name"}/>
            </FormControl>
            <FormControl id="location">
              <FormLabel>Setting</FormLabel>
              <ControlledInput value={cityInput} setValue={setCityInput} ariaLabel={"city"}/>
            </FormControl>
            <Select
            value={selectedValue}
            onChange={event => setSelectedValue(event.target.value)}
        >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </Select>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>I am not a murderer</Checkbox>
              </Stack>
              <Link href="/story">
                        <Button bg='#4F11FF' color='#FFFFFF' top = "-12"> Submit! {selectedValue} </Button>
                    </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    </Box>
  );
}