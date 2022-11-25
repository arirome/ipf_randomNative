import React, {useEffect} from 'react'
import {
    Text,
  
  Heading,
    Container,
    Box,
    Stack,
    HStack,
    AspectRatio,
    Image,
    Avatar,
    Center
  } from "native-base";

  import { ScrollView, View, SafeAreaView } from "react-native"

  import { connect } from "react-redux";

  import { verPublicaciones } from "./redux/actions/VerPublicaciones";



const Panel = ({verPublicaciones, publicacion:{publicaciones}}) => {

  

  useEffect(() => {

    verPublicaciones()
    
   
  }, [verPublicaciones]); 



  return (
    <SafeAreaView>
<ScrollView >


<Container  style={{"minWidth": '100%', "minHeight": '100%', "backgroundColor": "#346FB0"}} >



<Text fontSize="6xl"  style={{color:"white",position:"relative", left:40, top:30 }}>Avisos</Text>





  <View style = {{}}>
{
                        publicaciones.map(publicacion => (

                            <View>
                              <Box key={publicacion._id} alignItems="center"  style={{position:"relative", left:90, top:50, }}>
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={30 / 4}>
           
          </AspectRatio>
         
        </Box>
        <Stack p="4" space={3}>
        <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{
        uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
      }}>
          RB
        </Avatar>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {publicacion.user.nombre}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              {publicacion.tipodePublicacion}
            </Text>
          </Stack>
          <Text fontWeight="400">
          {publicacion.texto}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>  
    <Text></Text>
                            </View>

                        ))
                      }
                        </View>



      





  </Container>
  <Text></Text>
  <Text></Text>
  
  
  </ScrollView>
</SafeAreaView>
  )
}

const mapStateToProps = (state) => ({
  publicacion: state.publicacion,

});

export default connect(mapStateToProps, { verPublicaciones })(Panel);

