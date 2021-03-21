import axios from "axios";
import { authConstants } from "./Constants"

export const login = (user)=>{
    // console.log(user);
    return async (dispatch) =>{
         const res=await axios.post('http://localhost:2000/api/admin/signin',{
            ...user

        });
       
            console.log(res);
        
      

        dispatch({
            type : authConstants.LOGIN_REQUEST ,
            payload  :{
                ...user
            }
        });

    }
} 