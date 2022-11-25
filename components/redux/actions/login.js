
/* import { fetchSinToken,fetchConToken } from "../../helpers/fetch"; */

import {
  FETCH_USUARIO_REQUEST,
  FETCH_USUARIO_SUCCESS,

} from "../tipos/types";

import { fetchSinToken,fetchConToken } from "../../helpers/fetch";

import axios from "axios";

/* import {
  Text,
  Center,
  Box,
 Alert,
  VStack,
  HStack,
  IconButton,
  CloseIcon
} from "native-base"; */

import { Alert } from "react-native";

export const fetchUsuarioRequest = () => {
  return {
    type: FETCH_USUARIO_REQUEST,
  };
};

export const fetchUsuarioSuccess = (usuario) => {
  return {
    type: FETCH_USUARIO_SUCCESS,
    payload: usuario,
    
  }
  
};


export const fetchUsuario = (email, contrasenia) =>async dispatch=> {

    const res = await fetchSinToken(
        "auth/login",
        { email, contrasenia },
        "POST"
      );
      const body = await res.json();
      
      console.log(body);
    
      if (res.ok) {
        
      
        
        dispatch(
          fetchUsuarioSuccess({
              type: FETCH_USUARIO_SUCCESS,
              payload:body
         
          }),
          
         
        )
        
  return true

    }
    
    else {
      return Alert.alert(

        "error",
        "verifique los datos"
      )
    }
  
};



export default fetchUsuario;