import React from 'react'  
import { Box, Button, Container, Divider, Grid, InputBase, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from "@mui/material";
import MainLayout from  '../layout/MainLayout';

export default function About() {
    return (
        <>
            <MainLayout>

                <Box bgcolor='primary.main' pt={10} height='100vh' display='flex' alignItems='center'>
                    <Container>
                        <Box py={4}  >
                            <Typography textAlign='center' variant="h3" color='text.white'>About Page</Typography>
                        </Box>
                    </Container>
                </Box>
            </MainLayout>
        </>
    )
}
