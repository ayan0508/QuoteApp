import { AppBar,styled,Box,IconButton,List,ListItem } from '@mui/material';

import React from 'react';
import Custombuttom from './Custombuttom.jsx';

import ListIcon from '@mui/icons-material/List';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';



const StyleHeader= styled(AppBar)`
background-color: #751aff;
height: 55px;
`


const MenuButton=styled(ListIcon)(({theme})=>({
    display: 'none',
    [theme.breakpoints.down('sm')]:{
        display: 'flex',
        flexDirection: 'row-reverse',
        
    }
}))
const BoxButton=styled(Box)(({theme})=>({
    
    [theme.breakpoints.down('sm')]:{
       display:'none',
    }
}))


const Navbar=()=>{   
    
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    } 
    const list=()=>(
        <Box Style={{display:'block'}} onClink={handleClose}>
        <List>
            <ListItem button>
                <Custombuttom/>
            </ListItem>
        </List>
    </Box>
    )

    
    return(
        <>
            <StyleHeader>
                
                    <IconButton aria-label="delete" >
                    <MenuButton style={{color:'#FFFFFF'}} onClick={handleOpen}/>
                    </IconButton>
                    <Drawer open={open} onClose={handleClose}>{list()}</Drawer>
                    <BoxButton ><Custombuttom/></BoxButton>
            </StyleHeader>
        </>
    )
}
export default Navbar;