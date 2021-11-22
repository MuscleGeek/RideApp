import { message } from 'antd';
import axios from 'axios';

const url = "/api/cars/getallcars";

//CRUD :: R
export const getAllCars = () => async dispatch => {
    
    dispatch({type: "LOADING", payload:true})

    try {
        const response = await axios.get(url)  //localhost:5000/api/cars/getallcars
        dispatch({type: "GET_ALL_CARS", payload: response.data})  //retrieved data from API
        dispatch({type: "LOADING", payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: "LOADING", payload:false})
    }
}
//CRUD :: C
export const addCar = (reqObject) => async dispatch => {

        dispatch({type: "LOADING", payload: true})

    try {
        await axios.post('api/cars/addcar', reqObject)

        dispatch({type: "LOADING", payload: false})
        message.success("Got it!, A New Car has been added successfully! ")
        setTimeout(() => {
            window.location.href= "/admin"
        }, 1000);
    } catch (error) {
        console.error(error) 
        dispatch({type: "LOADING", payload:false}) 
    }
}
//CRUD :: U
export const editCar = (reqObject) => async dispatch => {

    dispatch({type: "LOADING", payload:true})

    try {
        await axios.post("/api/cars/editcar", reqObject)

        dispatch({type:"LOADING", payload: false})
        setTimeout(() => {
            message.success("Got it!, Car info has been updated successfully!")
            window.location.href="/admin"
        },1000) 
    } catch (error) {
        console.error(error)
        dispatch({type: "LOADING", payload: false})
    }
}

//CRUD :: D
export const deleteCar = (reqObject) => async dispatch => {

    dispatch({type: "LOADING", payload: true})

    try {
        await axios.post("/api/cars/deletecar", reqObject)

        dispatch({type: "LOADING", payload:false})
        message.success("Got it!, Car has been deleted successfully!")
        setTimeout(() => {
            window.location.reload()  //reloads the page
        },1000)

    } catch (error) {
        console.error(error)
        dispatch({type: "LOADING", payload:false})
    }
}
