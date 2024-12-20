import React from 'react'
import { Box, useMediaQuery } from '@mui/material';
import HeaderCom from '../component/headerCom';


export default function MainLayout({ children }) {

    return (
        <>
            <HeaderCom />
            <Box  >
                {children}
            </Box >
        </>
    )
}
