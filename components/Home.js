import React from 'react'
import { View } from 'react-native'

import {
    Box,
   Button,
   Center,
   Image,Text
  } from "native-base";



const Home = ({navigation}) => {
  return (

   

  
    <Box alignItems="center" >
<Center>
      <Image size={150} borderRadius={100} source={require('../assets/img/gorro.jpg')} alt="Alternate Text" />
    </Center>
<Text fontSize="4xl"  style={{color:"#346FB0",position:"relative", left:10, top:1 }}>Instituto Random</Text>

      <Button style={{position:"relative", top:15}} onPress={() =>{

navigation.navigate('Form')
}}>Login</Button>


<Image source={require('../assets/img/olas.png')} alt="image" style={{position:"relative", top:1}} />

    </Box>
  



  )
}

export default Home