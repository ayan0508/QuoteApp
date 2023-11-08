import axios from 'axios';
import * as actionType from '../Contants/Quote';
const URL='https://api.quotable.io';
export const getTag=()=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${URL}/tags`);
        dispatch({type:actionType.GET_TAG_SUCCESS,payload:data});
    }
    catch(e){
        console.log(e);
        dispatch({type:actionType.GET_TAG_FAILURE,payload:e.message});
    }
}

export const getRandom=()=>async(dispatch)=>{
    try{
        const {data} = await axios.get(`${URL}/quotes/random`);
        dispatch({type:actionType.GET_RANDOM_SUCCESS,payload:data});
    }
    catch(e){
        console.log(e);
        dispatch({type:actionType.GET_RANDOM_FAILURE,payload:e.message});
    }
}

export const getRandombyTag=(value)=>async(dispatch)=>{
    try{
        console.log(value);
        const {data} = await axios.get(`${URL}/quotes/random?tags=${value}`);  
        dispatch({type:actionType.GET_RANDOM_SUCCESS,payload:data});
    }
    catch(e){
        console.log(e);
        dispatch({type:actionType.GET_RANDOM_FAILURE,payload:e.message});
    }
}