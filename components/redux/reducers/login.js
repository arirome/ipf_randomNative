import { 
    FETCH_USUARIO_REQUEST,
    FETCH_USUARIO_SUCCESS,
  
    
    
  } from "../tipos/types";
  
  
  
  const INITIAL_STATE = {
    loading:false,
    data:[],
    error:'',
    uid: null,
    
  };
  
   
  
  export default function(state = INITIAL_STATE, action){
  
    switch (action.type) {
      case FETCH_USUARIO_REQUEST:
        return {
          ...state,
          loading:true
  
        };
       
        case FETCH_USUARIO_SUCCESS:
        return {
          
          loading:false,
          data:action.payload,
          error:'',
          
        };
      
      
  
  
      default:
        return state;
    }
  };