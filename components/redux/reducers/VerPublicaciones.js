import {
  
    VER_PUBLICACIONES_SUCCESS,
 
    
   
   } from "../tipos/types";

  
  
  const INITIAL_STATE = {
  
   
   
    publicaciones:[],
    loading:false,
    
    
  };
  
   
  
  export default function(state = INITIAL_STATE, action){
  
    switch (action.type) {
    
      
        case  VER_PUBLICACIONES_SUCCESS:
        return {
          
          ...state,
          publicaciones:action.payload,
          loading:false,
          
       
          
        };

       
      
    
      default:
        return state;
    }
  };
  