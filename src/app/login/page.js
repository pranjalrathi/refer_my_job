'use client';

import {
  Box, Button, Checkbox, Container, Divider, FormControlLabel, Grid, InputBase, InputLabel,
  OutlinedInput, Paper, Stack, Typography, List, ListItem, FormHelperText
} from "@mui/material";
import FirebaseSocial from "../component/FirebaseSocial";
import Link from "next/link";
import Welcometext from './Welcometext';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    userid: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const router = useRouter();
  const peopleCompany = [
    'John Doe - Google',
    'Jane Smith - Microsoft',
    'Michael Johnson - Amazon',
    'Emily Davis - Apple',
  ];

  const filteredPeople = peopleCompany.filter((personCompany) =>
    personCompany.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userid) {
      newErrors.userid = "User ID is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleClick = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      if (storedUserData.email === formData.userid && storedUserData.setpassword === formData.password) {
        router.push('/');
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError("User not registered. Please register first.");
    }
  };

  return (
    <Box className='reBg' pb={10}>
      <Box py={4} sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <Typography textAlign='center' variant="h3" color='text.white'>ReferMyJob</Typography>
        <Typography textAlign='center' variant="h5" color='text.white' sx={{ fontSize: { xs: '12px', sm: '1.5rem' } }}>Helping people apply for jobs through referrals</Typography>
      </Box>
      <Box mt={2}>
        <Container>
          <Grid container justifyContent="center" spacing={5} sx={{ px: { xs: 0, sm: 6 } }}>
            <Grid item xs={12} sm={6}>
              <Paper sx={{ mt: 4, px: 2, pt: 4, borderRadius: 3, height: '100%' }}>
                <Typography variant="h5" fontWeight='bold' sx={{ pb: 1.5 }}> Login to start sending job referrals</Typography>
                <Divider sx={{ borderBottom: "solid", borderColor: 'primary.main', mb: 4 }} />

                <Box component="form">
                  <Stack spacing={1}>
                    <InputLabel htmlFor="email-login" sx={{ fontWeight: '600', color: 'primary-main' }}>Email Address / Username</InputLabel>
                    <OutlinedInput
                      size="small"
                      id="email-login"
                      type="email"
                      name="userid"
                      value={formData.userid}
                      onChange={handleChange}
                      fullWidth
                      error={!!errors.userid}
                    />
                    {errors.userid && <FormHelperText error>{errors.userid}</FormHelperText>}
                  </Stack>
                  <Stack spacing={1} mt={3}>
                    <InputLabel htmlFor="password" sx={{ fontWeight: '600', color: 'primary-main' }}>Password</InputLabel>
                    <OutlinedInput
                      size="small"
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      fullWidth
                      error={!!errors.password}
                    />
                    {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
                  </Stack>
                  <Stack direction="row" my={2} justifyContent="space-between" alignItems="center" spacing={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="checked"
                          color="primary"
                          size="small"
                        />
                      }
                      label={<Typography variant="subtitle2" color='text.secondary'>Keep me signed in</Typography>}
                    />

                    <Typography component={Link} href="register" variant="subtitle2" color='text.secondary'>Forgot Password?</Typography>
                  </Stack>
                  {error && (
                    <Typography color='error' mt={1}>{error}</Typography>
                  )}
                  <Stack direction="row" spacing={2} mt={3}>
                    <Button variant="contained" onClick={handleClick} fullWidth>Login</Button>
                    <Button component={Link} href="register" variant="contained" fullWidth>Register</Button>
                  </Stack>
                </Box>
                <Box my={4}>
                  <Divider>
                    <Typography variant="caption"> Login with</Typography>
                  </Divider>
                </Box>
                <FirebaseSocial />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper sx={{ mt: 4, px: 2, py: 4, borderRadius: 3, height: '100%' }}>
                <Typography variant="h5" fontWeight='bold' sx={{ pb: 1.5 }}>Search for refer buddies</Typography>
                <Divider sx={{ borderBottom: "solid", borderColor: 'primary.main', mb: 4 }} />
                <Stack spacing={1} mb={4}>
                  <Paper
                    component="form"
                    sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search by company"
                      inputProps={{ 'aria-label': 'Search by company' }}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="contained">Search</Button>
                  </Paper>
                </Stack>
                <List className="company-list">
                  {filteredPeople.map((person, index) => (
                    <ListItem
                      key={index}
                      id="company-list"
                    >
                      {person}
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container justifyContent="center" spacing={5} sx={{ px: { xs: 0, sm: 6 } }}>
          <Grid item xs={12} sm={12}>
            <Welcometext />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
