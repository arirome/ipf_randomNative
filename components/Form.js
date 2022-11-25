
import React, { useState } from 'react'
import {
    Text,
  Stack,
    Box,
    Input,
    FormControl,
    ErrorMessage,
    WarningOutlineIcon,
    Pressable,
    Button,
    VStack
  } from "native-base";

  

  import { connect } from "react-redux";
  import { fetchUsuario } from "./redux/actions/login";

 

const Form=({ fetchUsuario, navigation }) =>{


  const [ email, setEmail ] = useState('');
  const [ contrasenia, setContrasenia ] = useState('');

  const handleLogin =async () => {
 

 const enviarDatos= await fetchUsuario(email, contrasenia);

if (enviarDatos==true) {
  navigation.navigate('Panel')

      

}

    console.log(email);
    console.log("fetch", await fetchUsuario(email, contrasenia));
    console.log(contrasenia);
  
  };
      
    return (


    
      <Stack space={4} w="75%" maxW="300px" mx="auto" style={{position:"relative", top:30 }}>

<Box  rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5" style={{"position":"relative"}}>

<VStack space={5} alignItems="center" >

{/* 

EMAIL:admin@hotmail.com
CONTRASEÑA: admin123

*/}

<Text  color="coolGray.800" mt="5" fontWeight="medium" fontSize="xl" >
👋 Welcome!
          </Text>
          </VStack>


          <Stack space={4} w="75%" maxW="300px" mx="auto">
     
      <Input variant="rounded" placeholder="email" 
      name="email"
      onChangeText={(text) => {
        setEmail(text)
      }}/>



      <Input variant="rounded" placeholder="contrasenia" 
      name="contrasenia"
      onChangeText={(text) => {
        setContrasenia(text)
      }}/>

      
    </Stack>


      <Box alignItems="center">
      <Button onPress={() => handleLogin()}>Click Me</Button>
    </Box>
    </Box>
    </Stack>
      
     
    
  

    

    )
  
}


const mapStateToProps = (state) => ({
  data: state.login.data,
  
});

export default connect(mapStateToProps, { fetchUsuario })(Form);
