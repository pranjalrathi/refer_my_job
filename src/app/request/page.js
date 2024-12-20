import { Box, Button, Container, Grid, InputLabel, List, ListItem, ListItemText, OutlinedInput, Paper, Stack, Typography } from "@mui/material";

export default function Request() {
  return (
    <Box >
      <Container>
        <Paper elevation={8} className="front-body">
          <Typography variant="h5" className="requestHeading" >Referral Requests Summary</Typography>
          <Box width='47%' pl="20px" pt="9px">
          
                <Typography variant="p" className="listitem">
                1. Request from Peter Pan for Business Analyst - 
                  </Typography>
                <Typography variant="h6" color="green" className="task">
                Complete
                  </Typography>
             
                  <Typography variant="p" className="listitem">2. Request from Christine Bohr for Manager-</Typography>
                  <Typography variant="h6" color="red" className="task">
                  Pending
                  </Typography>
          </Box>
          <Typography variant="h5" className="requestHeading">Submit Referral Details for Validation</Typography>
          <Box component="form" alignItems='center' >
            <InputLabel htmlFor="submission-date" className="inputlabel">Referral Submitted On:</InputLabel>
            <OutlinedInput
              size="small"
              id="submission-date"
              type="date"
              name="submission"
              className="outputlabel"
              fullWidth
            />
            <InputLabel htmlFor="confirmation" className="inputlabel">Attach Confirmation Screenshot:</InputLabel>
            <OutlinedInput
              size="small"
              id="confirmation"
              type="file"
              name="confirmation"
              className="outputlabel"
              fullWidth
            />

          </Box>
          <Button variant="contained" className="button" sx={{
            width: '90%',
            borderRadius: 2,
            textTransform: 'none',

          }} fullWidth>Submit for Validation</Button>

        </Paper>
      </Container>
    </Box>

  )
}
