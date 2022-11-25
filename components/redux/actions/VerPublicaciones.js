import axios from "axios";

import { VER_PUBLICACIONES_SUCCESS} from "../tipos/types";


export const VerAvisosSuccess = (res) => {
  return {
    type: VER_PUBLICACIONES_SUCCESS,
    payload: res,
  };
};


//get all profiles
export const verPublicaciones = () => async (dispatch) => {


try {

     const resp = await axios.get(
    "http://192.168.167.120:5000/get-publicacion"
  );


    dispatch(VerAvisosSuccess(resp.data));
    console.log("hola");
    console.log(resp);
    
} catch (error) {
    
}
 

};





export default verPublicaciones