import React from 'react';

import { Heading, Box, Image, chakra, Container, Stack ,Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';
import { transform } from 'framer-motion';


const headingOption={
    pos:'absolute',
    left:'50%',
    top:'50%',
    tranform:'translate(-50%, -50%)',
    TextTransform:'uppercase'
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxWidth={'container.xl'}  minH={'100vh'} p={'16'}>

      <Heading textTransform={'uppercase'}py={'2'} w={'fit-content'} borderBottom={'2px solid green'}  m={'auto'}   color={'purple'}>Services</Heading>

      <Stack h={'full'}
      p={'4'}
      alignItems={'center'}
      direction={['column' ,'row']}
      >

        <Image src={img5}  h={['40','400']} filter={'hue-rotate(-500deg)'}></Image>
        <Text letterSpacing={'widest'} lineHeight={"190%"} fontStyle={'italic'} textAlign={'center'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aliquam maxime earum doloremque eos mollitia quo voluptates, quasi aut, praesentium aliquid, facilis culpa quis perferendis. Assumenda adipisci cumque eum aut?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aliquam maxime earum doloremque eos mollitia quo voluptates, quasi aut, praesentium aliquid, facilis culpa quis perferendis. Assumenda adipisci cumque eum aut?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aliquam maxime earum doloremque eos mollitia quo voluptates, quasi aut, praesentium aliquid, facilis culpa quis perferendis. Assumenda adipisci cumque eum aut?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aliquam maxime earum doloremque eos mollitia quo voluptates, quasi aut, praesentium aliquid, facilis culpa quis perferendis. Assumenda adipisci cumque eum aut?</Text>



      </Stack>
      </Container>
      
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w="full" h="100vh" bgColor="black" color="white">
      <Image src={img1} />
      <Heading  bgColor={'white'} color={'black'} {...headingOption}>
        watch this</Heading>
    </Box>
    <Box w="full" h="100vh" bgColor="black" color="white">
      <Image src={img2} />
      <Heading bgColor={'black'} color={'white'} {...headingOption}>play zone </Heading>
    </Box>
    <Box w="full" h="100vh" bgColor="black" color="white">
      <Image src={img3} />
      <Heading bgColor={'white'} color={'black'} {...headingOption}>gamming Future </Heading>
    </Box>
    <Box w="full" h="100vh" bgColor="black" color="white">
      <Image src={img4} />
      <Heading bgColor={'white'} color={'black'} {...headingOption}>Night life is cool </Heading>
    </Box>
   
  </Carousel>
);

export default Home;
