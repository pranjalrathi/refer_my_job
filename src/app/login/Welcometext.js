import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function Welcometext() {
    return (
        <Box mt={15} color='text.white'>
            <Typography variant='h3' textAlign='center'>Welcome to ReferMyJob</Typography>
            <Typography variant='h5' textAlign='center'>Your Ultimate Networking Hub</Typography>
            <Typography sx={{ mt: 4 }}>Connect with Industry Professionals and Secure Direct Referrals for Your Dream Job Vacancies</Typography>
            <nav aria-label="secondary mailbox folders">
                <List sx={{ listStyle: "decimal", pl: 4 }}>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                        <ListItemText primary="Go to the company's career website and search for relevant job." />
                    </ListItem>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                        <ListItemText primary="Note down the job id and application link" />
                    </ListItem>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                        <ListItemText primary="Search here for company name or people registered in it to send referral request" />
                    </ListItem>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                        <ListItemText primary="Registered employees can submit your referral directly through their company's internal portal." />
                    </ListItem>
                    <ListItem sx={{ display: "list-item", p: 0 }}>
                        <ListItemText primary="Increases the chance of profile selection." />
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}
