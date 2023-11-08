
import { Box, Button, styled, Typography } from '@mui/material';
import Quote from './Quote';
import {getRandom,getTags } from '../Redux/Actions/Quoteaction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const BoxStyle=styled(Box)(({theme})=>({
    backgroundColor:'#ff4d4d', 
    width:'42vw',
    minHeight:'10vh',
    border: '1px solid #dadce0',
    borderRadius: 8,
    borderTop: 10,
    marginBottom:-8,
    marginTop:20,
    padding: 10,
[theme.breakpoints.down('lg')]:{
    marginTop:20,
    padding: 10,
    width:'42vw',
},
[theme.breakpoints.down('md')]:{
    marginTop:20,
    width:'42vw',
    padding: 10,
},
[theme.breakpoints.down('sm')]:{
    marginTop:20,
    width:'80vw',
    padding: 10,
}
}))


const BoxStyle1 = styled(Box)`

margin-top: 56px;
`;

const ButtonStyle = styled(Box)`
margin-top: 50px;
width:40vw;

`

function Home(){
    const {quotes} = useSelector(state=>state.getRandom);

    const dispatch=useDispatch();

    
    useEffect(()=>{
        dispatch(getRandom())   
    },[dispatch])

    const handleClick=()=>{
        dispatch(getRandom());
    }

    const handleSave=()=>{
        //dispatch(getRandom());
        const id=JSON.stringify(quotes[0]._id);
        console.log(id);
        const stringifiedObj = JSON.stringify(quotes);
        localStorage.setItem(
            id,
            stringifiedObj
          )
    }

    return (
        <>
           <BoxStyle1 style={{display:'flex', alignItems:'center',flexDirection:'column'}}>
                {quotes && quotes.length > 0?(
                        <Box style={{display:'flex',justifyContent:'center',marginTop:20}} >
                            <BoxStyle style={{paddingBottom:20}}>
                                <Typography style={{color:'#ffff'}}>{quotes[0].content}</Typography>
                                <h3 style={{display:'flex',marginLeft:250,color:'#ffff'}}>-{quotes[0].author}</h3>
                            </BoxStyle>
                        </Box>):( <Box style={{display:'flex',justifyContent:'center',marginTop:20}} >
                    <BoxStyle style={{paddingBottom:20}}>
                        <h3>Please wait...</h3>
                    </BoxStyle>
                </Box>)
                 }
                <ButtonStyle style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                <Quote/>
                <Button variant="contained" onClick={handleClick} style={{MarginLeft:100,height:40,width:300,backgroundColor:'green',borderRadius:50}}>Next Quote</Button>
                <Button variant="contained" onClick={handleSave} style={{MarginLeft:100,height:40,width:300,backgroundColor:'green',borderRadius:50 ,marginTop:10}}>Add To Bookmark</Button>
                </ButtonStyle>
           </BoxStyle1> 
        </>
    )
}
export default Home;



