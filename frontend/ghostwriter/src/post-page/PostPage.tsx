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
} from '@chakra-ui/react';

import { getDatabase, ref, set } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Dispatch, useState, SetStateAction } from 'react';
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
  const [imageInput, setImageInput] = useState<string>("")
  const [linkInput, setLinkInput] = useState<string>("")
  const [descriptionInput, setDescriptionInput] = useState<string>("")
  const [featuringInput, setFeaturingInput] = useState<string>("")
  const [dateInput, setDateInput] = useState<string>("")
  const [cityInput, setCityInput] = useState<string>("")
  const [venueInput, setVenueInput] = useState<string>("")
  const [genre1Input, setGenre1Input] = useState<string>("")
  const [genre2Input, setGenre2Input] = useState<string>("")

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
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>I am not a murderer</Checkbox>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={() => {
                  const id = Math.round(Math.random()*999999) //noncontinuous
                  writeNewEvent(5, nameInput, linkInput, imageInput, descriptionInput, featuringInput, 1671974193, cityInput,venueInput, "rap", "soul")
                  //TODO: fix the key generation. It needs to be continuous (i.e. 1,2,3,4,5) for some reason
                  //I almost want to see if we can fix this in the backend because it doesnt make sense why noncontinuous shouldn't work --what if someone deletes a listing?
                      }
                  }
                >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    </Box>
  );
}