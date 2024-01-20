import Image from "next/image";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function NavBar() {
    return (
        <Container>
            {/* Bartr Logo (Left) */}
            <Image
                src="/bartrlogo.svg"
                alt="logo"
                width={360} // Adjust the width as needed
                height={120} // Adjust the height as needed
            />

            {/* AppBar with Dark Grey Color (Below the Logo) */}
            <AppBar position="static" style={{ backgroundColor: '#424242' }}>
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    {/* Login and Sign Up Buttons (Right) */}
                    <Stack spacing={2} direction="row" justifyContent={"flex-end"}>
                        <Button variant="contained">
                            LOG IN
                        </Button>
                        <Button variant="outlined">
                            SIGN UP
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Container>
    );
}
