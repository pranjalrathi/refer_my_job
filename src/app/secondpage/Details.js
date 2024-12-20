'use client'
import { Box, InputLabel, OutlinedInput, Paper, Typography,Button, Stack } from '@mui/material'
import React, { useState } from 'react'

export default function Details() {
    const [userData, setUserData] = useState({
        name: "",
        currentCompany: "",
        currentRole: "",
        applicationJobId: "",
        aaplyingJob: "",
        attachResume: "",
        attachCoverLetter:"",
        rewardAmount:""
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
      }
  return (
    <Box>
        <Paper elevation={5} className='firstone'>
            <Typography variant='h6' textAlign='center' color='grey' fontWeight='900'>Request to john Doe</Typography> 
            <Typography variant='h3' textAlign='center' fontWeight='bold' color='#3de999'>Job Referral Form</Typography>
            <Box className='field'>
            <InputLabel htmlFor="name" className='input'>Name :</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="name"
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        className='output'
                        required
                      />
             <InputLabel htmlFor="currentCompany" className='input'>Current Company :</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="currentCompany"
                        type="text"
                        name="currentCompany"
                        value={userData.currentCompany}
                        onChange={handleChange}
                       className='output'
                        required
                      />
             <InputLabel htmlFor="currentRole" className='input'>Current Role :</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="currentRole"
                        type="text"
                        name="currentRole"
                        className='output'
                        value={userData.currentRole}
                        onChange={handleChange}
                        
                        required
                      />
                 <InputLabel htmlFor="applicationJobId" className='input'>Application Job Id :</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="applicationJobId"
                        type="text"
                        name="applicationJobId"
                        value={userData.applicationJobId}
                        onChange={handleChange}
                        className='output'
                        required
                      />
                       <InputLabel htmlFor="applyingJob" className='input'>Link For the job Applying for :</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="applyingjob"
                        type="text"
                        name="applyingjob"
                        value={userData.applyingjob}
                        onChange={handleChange}
                        className='output'
                        required
                      />
                       <InputLabel htmlFor="attachResume" className='input'>Attach Resume:</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="attachResume"
                        type="file"
                        name="attachResume"
                        value={userData.attachResume}
                        onChange={handleChange}
                        className='output'
                        required
                      />
                       <InputLabel htmlFor="attachCoverLetter" className='input'>Attach Cover Letter (Optional) :</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="attachCoverLetter"
                        type="file"
                        name="attachCoverLetter"
                        value={userData.attachCoverLetter}
                        onChange={handleChange}
                        className='output'
                        required
                      />
                        <InputLabel htmlFor="rewardAmount" className='input'>Reward Amount:</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="rewardAmount"
                        type="text"
                        name="rewardAmount"
                        value={userData.rewardAmount}
                        onChange={handleChange}
                        className='output'
                        placeholder='Enter min amount Rs. 50'
                        required
                      />
                      
                      <Stack>

                    <Button variant="contained" className='submitbutton' sx={{textTransform:'none'}} >Submit</Button>
                      </Stack>
                </Box>

        </Paper>
    </Box>
  )
}
