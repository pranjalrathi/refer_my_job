'use client'

import { Button, Pagination, Paper, Typography,Stack,Box } from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import ShareIcon from '@mui/icons-material/Share';
export default function SecondPage(){
    return(
        <>
        <Pagination></Pagination>
            <Paper elevation={5} className="secondpage">
               <Typography variant="h5" color='black' p='10px' fontWeight="bold">Senior Data Scientist</Typography>
               <Typography variant="p" color='grey' p='10px'>Noida, Uttar Pradesh, India + 2 more locations</Typography>
               <Stack direction='row' p='10px'>

               <Button variant="contained" >Apply</Button>
               <Button><BookmarkBorderIcon />Save</Button>
               <Box sx={{display:'flex', justifyContent:'flex-end'}}>
               <Button ><ShareIcon /> Share Job</Button>
               </Box>
               </Stack>
            </Paper>
        </>
        
    )
}
