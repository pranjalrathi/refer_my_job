'use client';
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import app from "../firebase";

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
    },
    '&:hover fieldset': {
      borderColor: '#000080',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000080',
      boxShadow: '0 0 5px rgba(0, 0, 128, 0.5)',
    },
  },
}));

const StyledGoogleIcon = styled(GoogleIcon)(({ theme }) => ({
  '& path:nth-of-type(1)': {
    fill: '#4285F4',
  },
  '& path:nth-of-type(2)': {
    fill: '#34A853', 
  },
  '& path:nth-of-type(3)': {
    fill: '#FBBC05', 
  },
  '& path:nth-of-type(4)': {
    fill: '#EA4335', 
  },
}));

const RegisterPage = () => {
  const [user, setUser] = useState(null);
  const [action, setAction] = useState("Register");
  const router = useRouter();
  const auth = getAuth(app);
  const [x,setX] = useState()
  const changeValue=()=>{
    setX("x changed");
    console.log(x);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error.message);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: '12px',
        padding: { xs: '24px 16px', sm: '46px 24px 22px' },
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        flex: '1',
        animation: 'slideIn 1s ease-out',
        maxWidth: { xs: '100%', sm: '80%', md: '60%' },
        margin: 'auto',
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: '800',
          color: '#000080',
          borderBottom: '2px solid #000080',
          paddingBottom: '10px',
          marginBottom: '36px',
          fontSize: { xs: '1.2em', sm: '1.6em' },
          lineHeight: 'normal',
          textAlign: 'center',
        }}
      >
        Register or Login to start sending job referrals
      </Typography>
      {(action === "Register" ? ['Full Name', 'Email', 'Company', 'Position'] : ['User Id', 'Password']).map((label, index) => (
        <Box key={index} sx={{ marginBottom: '25px', width: '100%' }}>
          <Typography variant="body1" sx={{ margin: '10px 0', fontWeight: 'bold' }}>
            {label}
          </Typography>
          <StyledTextField
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                padding: '6.5px 14px',
              },
              fontWeight: '800',
              marginTop: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              transition: 'border-color 0.3s',
            }}
            required
          />
        </Box>
      ))}
      <Box
        width="100%"
        textAlign="center"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '10px',
          marginTop: '10px',
        }}
      >
          <Button variant="contained">Contained</Button>
        <Button
          variant="contained"
          onClick={() => setAction("Register")}
          sx={{
            width: { xs: '100%', sm: '48%' },
            borderRadius: 2,
            padding: '10px',
            textTransform: 'none',
            backgroundColor: '#000080',
            color: '#fff',
            fontSize: '1em',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
              backgroundColor: '#191970',
              transform: 'translateY(-2px)',
            },
          }}
        >
          Register
        </Button>
        <Button
          variant="contained"
          onClick={() => setAction("Login")}
          sx={{
            width: { xs: '100%', sm: '48%' },
            borderRadius: 2,
            padding: '10px',
            textTransform: 'none',
            backgroundColor: '#000080',
            color: '#fff',
            fontSize: '1em',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
              backgroundColor: '#191970',
              transform: 'translateY(-2px)',
            },
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          onClick={signInWithGoogle}
          sx={{
            width: { xs: '100%', sm: '48%' },
            borderRadius: 2,
            padding: '10px',
            textTransform: 'none',
            backgroundColor: '#000080',
            color: '#fff',
            fontSize: '1em',
            lineHeight: 'normal',
            letterSpacing: '0em',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s',
            '&:hover': {
              backgroundColor: '#191970',
              transform: 'translateY(-2px)',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <StyledGoogleIcon fontSize="small" 
         />
          Continue with Google
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterPage;