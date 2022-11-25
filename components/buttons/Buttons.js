import React from "react";


import {
    Text,

    Box,
    
   Button
  } from "native-base";

export default function Buttons(props) {

    //hacer una constante para guardar diferentes funcionalidades para despues pasarlos a los otros componentes
    const {
        action, 
      
        label
    }
        =props

    return(

        <Box alignItems="center"  space={4}>
      <Button onPress={action}>{label} </Button>
    </Box>

      /*   <TouchableOpacity 
        style={style.button} 
        onPress={action}
         
        >

        <Text style={style.textbutton} > {label}</Text>

        </TouchableOpacity>
 */
    )

    
}