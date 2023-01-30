import { Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react';
import branch from '../story-page/StoryPage';

export default function ChoiceComponant() {
  const [val, setValue] = React.useState('A')
  return (
    <RadioGroup onChange={setValue} value={val}>
      <Stack direction='row'>
        <Radio value='A'>Choose A</Radio>
        <Radio value='B'>Choose B</Radio>
        <Radio value='C'>Choose C</Radio>
      </Stack>
    <Button 
      type="submit"
      onClick={() => {branch(val)}}
    >
      Submit
    </Button>
    </RadioGroup>
  )
}
