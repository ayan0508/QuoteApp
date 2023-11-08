import {styled,Box,Typography,Input,  NativeSelect} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getTag,getRandombyTag } from '../Redux/Actions/Quoteaction';

const SelectStyle=styled(NativeSelect)(({theme})=>({
    minWidth:'20vw',
    height:'7vh',
    marginBottom: '30px',
    marginTop: '30px',

    [theme.breakpoints.down('sm')]:{
        minwidth:'15vw',
    }
}))
function Quote(){
    const [value,setValue] =useState('');
    
    const {tags}=useSelector(state=>state.getTag);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getTag())

    },[dispatch]);
    useEffect(()=>{
            dispatch(getRandombyTag(value))
    },[dispatch,value]);
    
    const handleData=(e)=>{
      
            setValue(e.target.value);
    
    }
    return (
        <>
            <SelectStyle
                                variant="standard"
                               
                                placeholder='Choose'
                                
                                onChange={handleData}> 
                                 <option value={value}></option>
                                 {
                                    (tags)?tags.map((item)=>{return(<option value={item.name}>{item.name}</option>)}):<h1>wait...</h1>
                                 }           
                                   
            </SelectStyle>
        </>
    )
}
export default Quote;