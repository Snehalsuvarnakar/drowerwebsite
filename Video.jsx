import { Heading, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'

const Video = () => {
  return (
    <Stack direction={['column','row']} h={'100vh'}>
        <VStack w={'full'}>
            <Video 
            controls
            controlsList="nodownload"
            src=""
            
            >

            </Video>
            <VStack>
                <Heading>sample videos</Heading>
                <Text>nsjdjhwdjknwkdjnwqkdnwnjwqqqqqqjjnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnjkq    wwnjksnANSKJANJDNjncjsnjcsnj</Text>
            </VStack>

        </VStack>
    </Stack>
  )
}

export default Video