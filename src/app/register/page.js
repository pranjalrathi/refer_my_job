'use client';

import { 
  Box, Button, Container, Divider, Grid, InputBase, InputLabel, OutlinedInput, Paper, Stack, Typography, FormHelperText 
} from "@mui/material";
import Link from "next/link";
import FirebaseSocial from "../component/FirebaseSocial";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    currentlocation: "",
    phonenumber: "",
    latestcollegename: "",
  });
  const [companyData, setCompanyData] = useState({
    company: "",
    companyemail: "",
    position: "",
  });
  const [password, setPassword] = useState({
    setpassword: "",
    confirmpassword: ""
  });
  const [errors, setErrors] = useState({});
  const [passwordMatch, setPasswordMatch] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (password.setpassword === password.confirmpassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [password.setpassword, password.confirmpassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setCompanyData({ ...companyData, [name]: value });
    setPassword({ ...password, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!userData.firstname) newErrors.firstname = "First name is required";
    if (!userData.lastname) newErrors.lastname = "Last name is required";
    if (!userData.email) newErrors.email = "Email is required";
    if (!companyData.company) newErrors.company = "Company is required";
    if (!userData.currentlocation) newErrors.currentlocation = "Current location is required";
    if (!companyData.position) newErrors.position = "Position is required";
    if (!userData.phonenumber) {
      newErrors.phonenumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(userData.phonenumber)) {
      newErrors.phonenumber = "Phone number must be 10 digits";
    }
    if (!userData.latestcollegename) newErrors.latestcollegename = "Latest college name is required";
    if (!password.setpassword) newErrors.setpassword = "Password is required";
    if (!password.confirmpassword) newErrors.confirmpassword = "Confirm password is required";
    return newErrors;
  };

  const handleRegister = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (passwordMatch) {
      const userDataToSave = { ...userData, ...companyData, password: password.setpassword };
      localStorage.setItem('userData', JSON.stringify(userDataToSave));
      router.push('/');
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
            <Grid item xs={12} sm={12} md={6}>
              <Paper sx={{ mt: 4, px: 2, py: 4, borderRadius: 3, height: '100%' }}>
                <Typography variant="h5" fontWeight='bold' sx={{ pb: 1.5 }}> Register to start sending job referrals</Typography>
                <Divider sx={{ borderBottom: "solid", borderColor: 'primary-main', mb: 4 }} />

                <Box component="form">
                  <Stack direction="row" spacing={2}>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="firstname" sx={{ fontWeight: '600', color: 'primary-main' }}>First Name</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="firstname"
                        type="text"
                        name="firstname"
                        value={userData.firstname}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!errors.firstname}
                      />
                      {errors.firstname && <FormHelperText error>{errors.firstname}</FormHelperText>}
                    </Stack>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="lastname" sx={{ fontWeight: '600', color: 'primary-main' }}>Last Name</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="lastname"
                        type="text"
                        name="lastname"
                        value={userData.lastname}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!errors.lastname}
                      />
                      {errors.lastname && <FormHelperText error>{errors.lastname}</FormHelperText>}
                    </Stack>
                  </Stack>
                  <Stack spacing={1} mt={3}>
                    <InputLabel htmlFor="email" sx={{ fontWeight: '600', color: 'primary-main' }}>Personal Email</InputLabel>
                    <OutlinedInput
                      size="small"
                      id="email"
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={!!errors.email}
                    />
                    {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
                  </Stack>
                  <Stack spacing={1} mt={3}>
                    <InputLabel htmlFor="company" sx={{ fontWeight: '600', color: 'primary-main' }}>Company</InputLabel>
                    <OutlinedInput
                      size="small"
                      id="company"
                      type="text"
                      name="company"
                      value={companyData.company}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={!!errors.company}
                    />
                    {errors.company && <FormHelperText error>{errors.company}</FormHelperText>}
                  </Stack>
                  <Stack spacing={1} mt={3}>
                    <InputLabel htmlFor="companyemail" sx={{ fontWeight: '600', color: 'primary-main' }}>Company Email &nbsp;
                      <Typography variant="caption">(optional)</Typography>
                    </InputLabel>
                    <OutlinedInput
                      size="small"
                      id="companyemail"
                      type="email"
                      name="companyemail"
                      value={companyData.companyemail}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Stack>
                  <Stack spacing={1} mt={3}>
                    <InputLabel htmlFor="currentlocation" sx={{ fontWeight: '600', color: 'primary-main' }}>Current Location</InputLabel>
                    <OutlinedInput
                      size="small"
                      id="currentlocation"
                      type="text"
                      name="currentlocation"
                      value={userData.currentlocation}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={!!errors.currentlocation}
                    />
                    {errors.currentlocation && <FormHelperText error>{errors.currentlocation}</FormHelperText>}
                  </Stack>
                  <Stack spacing={1} mt={3}>
                    <InputLabel htmlFor="position" sx={{ fontWeight: '600', color: 'primary-main' }}>Position</InputLabel>
                    <OutlinedInput
                      size="small"
                      id="position"
                      type="text"
                      name="position"
                      value={companyData.position}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={!!errors.position}
                    />
                    {errors.position && <FormHelperText error>{errors.position}</FormHelperText>}
                  </Stack>
                  <Stack spacing={1} mt={3}>
                    <InputLabel htmlFor="phonenumber" sx={{ fontWeight: '600', color: 'primary-main' }}>Phone Number &nbsp;
                      <Typography variant="caption">(optional)</Typography>
                    </InputLabel>
                    <OutlinedInput
                      size="small"
                      id="phonenumber"
                      type="text"
                      name="phonenumber"
                      value={userData.phonenumber}
                      onChange={handleChange}
                      fullWidth
                      error={!!errors.phonenumber}
                    />
                    {errors.phonenumber && <FormHelperText error>{errors.phonenumber}</FormHelperText>}
                  </Stack>
                  <Stack spacing={1} mt={3}>
                    <InputLabel htmlFor="latestcollegename" sx={{ fontWeight: '600', color: 'primary-main' }}>Latest College Name</InputLabel>
                    <OutlinedInput
                      size="small"
                      id="latestcollegename"
                      type="text"
                      name="latestcollegename"
                      value={userData.latestcollegename}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={!!errors.latestcollegename}
                    />
                    {errors.latestcollegename && <FormHelperText error>{errors.latestcollegename}</FormHelperText>}
                  </Stack>
                  <Stack direction="row" spacing={2} mt={3}>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="setpassword" sx={{ fontWeight: '600', color: 'primary-main' }}>Set Password</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="setpassword"
                        type="password"
                        name="setpassword"
                        value={password.setpassword}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!errors.setpassword}
                      />
                      {errors.setpassword && <FormHelperText error>{errors.setpassword}</FormHelperText>}
                    </Stack>
                    <Stack spacing={1} sx={{ width: '100%' }}>
                      <InputLabel htmlFor="confirmpassword" sx={{ fontWeight: '600', color: 'primary-main' }}>Confirm Password</InputLabel>
                      <OutlinedInput
                        size="small"
                        id="confirmpassword"
                        type="password"
                        name="confirmpassword"
                        value={password.confirmpassword}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!errors.confirmpassword}
                      />
                      {errors.confirmpassword && <FormHelperText error>{errors.confirmpassword}</FormHelperText>}
                    </Stack>
                  </Stack>
                  {!passwordMatch && password.setpassword && password.confirmpassword && (
                    <Typography color='error' mt={1}>Passwords do not match</Typography>
                  )}

                  <Stack direction="row" spacing={2} mt={3}>
                    <Button variant="contained" onClick={handleRegister} fullWidth>Register</Button>
                    <Button component={Link} href="login" variant="contained" fullWidth>Login</Button>
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
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
