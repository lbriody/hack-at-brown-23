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
  nameInput4: string, nameInput5: string, cityInput: string, selectedStory: string) {
    // TODO: write this function
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
              borderRadius='18'
              maxW='370'
      ></Input>
      )
  }


export default function SimpleCard() {
  const [nameInput1, setNameInput1] = useState<string>("")
  const [nameInput2, setNameInput2] = useState<string>("")
  const [nameInput3, setNameInput3] = useState<string>("")
  const [nameInput4, setNameInput4] = useState<string>("")
  const [nameInput5, setNameInput5] = useState<string>("")
  const [cityInput, setCityInput] = useState<string>("")
  const [selectedStory, setSelectedStory] = useState("")

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
              <Select
              borderRadius='18'
              bgColor={'black'}
              maxW='370'
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
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox fontSize="18">I am not a murderer or a bot</Checkbox>
              </Stack>
              <Link href="/story"><Button
              fontSize="16"
              width={220}
              height={35}
                bg={'white'}
                borderRadius={'2xl'}
                color={'black'}
                _hover={{
                  bg: 'grey',
                }}
                onClick={() => {
                  const id = Math.round(Math.random()*999999) //noncontinuous
                  writeEnum(nameInput1, nameInput2, nameInput3, nameInput4, nameInput5, cityInput, selectedStory)
                      }
                  }
                >
                Tell me a story
              </Button></Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    </Box>
  );
}