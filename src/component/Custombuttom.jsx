import { Box, Button, styled, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
  display:'flex',
 justifyContent: 'space-between',
 
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    minWidth: 20,
  },
}));

const Componemt= styled(Link)`
margin-left:10;
line-height:0;
color:inherit;
text-decoration:none;

`
const CustomButton = () => {
  return (
    <Container>
     <Componemt to={'/'}> <Typography style={{marginLeft:15, fontSize:23}} >Home</Typography></Componemt>
     <Componemt to={'/bookmark'}><Typography style={{marginRight:15,fontSize:23}} >Bookmark</Typography></Componemt>
    </Container>
  );
};

export default CustomButton;
