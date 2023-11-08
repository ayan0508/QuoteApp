import { Box, Button, styled, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect,useState } from 'react';
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
function Bookmark(){
    
     const [arr, setData] = useState([]);
    // useEffect(() => {
    //     console.log(arr);
    //     Object.keys(localStorage).forEach((key) => {
    //         const jsonString = localStorage.getItem(key); 
    //         const parsedObject = JSON.parse(jsonString);
    //         arr.push(parsedObject);
    //       });
    //   }, [arr]);
   
    // const handleClick=(e,index)=>{
    //     const id=arr[index][0]._id;
    //     console.log(id);
    //    arr = arr.filter((element) => console.log(element[0]) );
    //    setData([]);
    //     localStorage.removeItem('HFT6qcdMVVt');
    // }

    useEffect(() => {
        const localData = Object.keys(localStorage).map((key) => {
          const jsonString = localStorage.getItem(key);
          return JSON.parse(jsonString);
        });
        setData(localData);
      }, []);
    
      const handleClick = (e, index) => {
        const id = arr[index][0]._id;
        //console.log(id);
        const data=localStorage.key(id);
       
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            
            if (key === data) {
                console.log("yes");
              localStorage.removeItem(key);
              break; // Stop searching after the item is removed
            }
          }        
        const updatedArr = arr.filter((item) => item[0]._id!== id);
        setData(updatedArr);
      }
    return (
        <>
        {
            (arr&&arr.length>0)?(
            arr.map((item,index)=>{
                return(
                    
                    <Box style={{display:'flex',justifyContent:'center',marginTop:65}}>
                        <BoxStyle style={{paddingBottom:20}}> 
                            <Typography style={{color:'#ffff'}}>{item[0].content}</Typography>
                            <h3 style={{display:'flex',flexDirection:'row-reverse',color:'#ffff'}}>-{item[0].author}</h3>
                        </BoxStyle><DeleteIcon sx={{ marginTop:10}} onClick={(e)=>handleClick(e,index)}/>
                    </Box> 
                )
            })):(<h1 style={{marginTop:20}}>Wait...</h1>)
                
             
        }
        </>
    )
}
export default  Bookmark;