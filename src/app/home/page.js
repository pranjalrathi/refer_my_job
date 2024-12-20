'use client'
import React, { useState } from 'react'
import HeaderCom from '../component/headerCom'
import ClearIcon from '@mui/icons-material/Clear';

import { Box, Checkbox, Container, FormControlLabel, OutlinedInput, Typography, Button, InputAdornment, IconButton, Stack, TextField, Autocomplete, FormHelperText } from "@mui/material";
import MainLayout from '../layout/MainLayout';
import { LocationCity, LocationOn, Search } from '@mui/icons-material';


export default function home() {
  const [value, setValue] = useState('');
  const [location,setLocation] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [city,setCity] = useState('');
  const [showDetails,setShowDetails] = useState(false)
  const [count,setCount] = useState(0)


  const handleClear = () => {
    setValue('');
    setLocation('')
    setSelectedCity(null);
  };

  const handleCityChange = (event)=>{
    setCity(event.target.value)
    setShowDetails(event.target.value.length>0);
  }
  
  useEffect(()=>{
    setTimeout(() => {
      setCount((count)=>count+1)
    }, 3000);
  }
    
  )

  return (
    <>
    
      <MainLayout>
      
        <Box pt={10} height='100vh' display='flex' alignItems='center'>
          <Container>
            <Box py={4}  >
              <Typography variant="h3" color='text.black' fontWeight={900}>Because impact matters</Typography>
              <button onClick={changeButton}>Reset</button>
              <Stack direction="row" gap={3}>

                <OutlinedInput
                  size='small'
                  id='searchjobtitle'
                  type='text'
                  name='searchjobtitle'
                  fullWidth
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  }
                  endAdornment={
                    value && (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClear}>
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                />
              
                <OutlinedInput
                  size="small"
                  id="searchplace"
                  type="text"
                  name="searchplace"
                  value={city}
                  onChange={handleCityChange}
                  fullWidth
                  startAdornment = {
                    <InputAdornment position='start'>
                      <LocationOn />
                    </InputAdornment>
                  }
                  endAdornment = {
                    location && (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleClear}>
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                />
                {
                  showDetails && ( 
                    <div style={{marginTop:'10px'}}>
                      <FormControlLabel control={<Checkbox name='checkedCity' />}
                      label={`${city},State,India`} />
                    </div>
                  )
                }
               
                <Button variant="contained" sx={{
                  backgroundColor:'purple',
                  width:'34%'
                }} fullWidth>Find Job</Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </MainLayout>
    </>
  )
} 