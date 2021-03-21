import { authConstants } from "../action/Constants"

const initState = {
   
    email:'snh@gmail.com' ,
    password : '234'
}
const authreducer = (state=initState,action)=>{
    // console.log('in redu');

    switch(action.type){
    case authConstants.LOGIN_REQUEST : {
         console.log('in redu');
        state = {
            ...state ,
            ...action.payload
        }
       
        }
    }
    return state;
}
export default authreducer;