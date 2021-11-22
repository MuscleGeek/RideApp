import axios from "axios";
import { message } from "antd";

export const userLogin = (reqObj) => async dispatch => {
    
    dispatch({type: 'LOADING', payload:true})
    
    try {
        const response = await axios.post('/api/users/login', reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))   //data will be sent as JSON -> string format
        message.success("Login Success!")
        dispatch({type: 'LOADING', payload:false})
        //When user got logged in it must be redirected to "/" page(at 500 miliseconds)
        setTimeout(() =>{
            window.location.href="/"
        }, 500)
    } catch (error) {
        console.log(error)
        message.error("Ooops!, Something went wrong!")
        dispatch({type: 'LOADING', payload:false})
        
    }
}

export const userRegister = (reqObj) => async dispatch => {

    dispatch({type: 'LOADING', payload:true})

    try {
        await axios.post('/api/users/register', reqObj)
        message.success("Registered Successfully!") 
         //When user got registered it must be redirect to "/login" page(~ 500 miliseconds) for login session
        setTimeout(() => {
            window.location.href="/login"                   
        }, 500);                                        
                              
        dispatch({type:'LOADING', payload:false})
           
    } catch (error) {
        console.log(error)
        message.error(`Ooops!, Registration went wrong!`)
        dispatch({type:'LOADING', payload:false})
        
    }
}