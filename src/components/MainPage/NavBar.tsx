import Image from "next/image";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
    return (
        <div>
            {/* Bartr Logo (Left) */}
            <Image
                src="/bartrlogo.svg"
                alt="logo"
                width={360} // Adjust the width as needed
                height={120} // Adjust the height as needed
            />
            {/* Login and Sign Up Buttons (Right) */}
            <Stack spacing={2} direction="row" sx={{ flex:1, justifyContent: "flex-end"}}>
                        <Button variant="contained" style={{backgroundColor: '#FCFCFC', color: '#212121'}}>
                            LOG IN
                        </Button>
                        <Button variant="outlined" style={{backgroundColor: '#212121', color: '#FCFCFC'}}>
                            SIGN UP
                        </Button>
            </Stack>
            {/* AppBar with Dark Grey Color (Below the Logo) */}
            <AppBar position="static" style={{ backgroundColor: '#424242', height: '80px'}}>
                <Stack direction="row" sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%", // Set width to 100% to cover the screen width
                    padding: "1rem",
                    marginRight: "10px",
                }}>
                    {/* Centered Text */}
                    <Typography variant="h6" component="div" sx={{ 
                      textAlign: 'center', 
                      fontSize: '45px', 
                      fontFamily: 'Helvetica', 
                      color: 'white', 
                      display: 'flex',
                    }}>
                        popular listings
                    </Typography>
                    
                </Stack>
            </AppBar>
        </div>
    );
}
