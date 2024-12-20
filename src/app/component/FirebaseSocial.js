import { Button, Stack } from "@mui/material"
import Link from 'next/link'
import { getAuth } from "firebase/auth"
import { useRouter } from "next/navigation"
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth"
import { useEffect, useState } from "react"
import app from "../firebase"
const FirebaseSocial = () => {
  const [user,setUser] = useState(null);
  const router = useRouter();
  useEffect (()=>{
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user)=>{
      if(user){
        setUser(user)
      }
      else{
        setUser(null)
      }
    })
    return () => unsubscribe ();
  },[])
  const signInWithGoogle = async()=>{
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    try{
      await signInWithPopup(auth,provider)
      router.push("/")
    }
    catch(error){
      console.error("Error signing in with Google",error.message)
    }
  }
  return (
    <Stack
    direction="row"
    spacing={{xs:1,sm:2}}
    justifyContent={{xs:'space-around',sm:'space-between'}}
    sx={{
        '& .MuiButton-startIcon': { mr: { xs: 0, sm: 1 }, ml: { xs: 0, sm: -0.5 } }
    }}
    >
      <Button variant="outlined"
      onClick={signInWithGoogle}
      color="primary"
      fullWidth
      startIcon={<img src='/images/icons/google.svg' alt="Twitter" />}>
      Google
      </Button>
      <Button
                variant="outlined"
                color="primary"
                fullWidth
                startIcon={<img src='/images/icons/linkedin.svg' alt="linkedin" />}
                sx={{marginTop: '-5px'}}
                component={Link} href="https://www.linkedin.com/feed/" 
            >
                {'Linkedin'}
            </Button>
            <Button
                variant="outlined"
                color="primary"
                fullWidth
                startIcon={<img src='/images/icons/facebook.svg' alt="Facebook" />}
                component={Link} href="https://www.facebook.com/" 
            >
                {'Facebook'}
            </Button>

    </Stack>
  )
}

export default FirebaseSocial
