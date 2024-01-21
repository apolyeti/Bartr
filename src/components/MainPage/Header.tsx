import { AppBar, Box, Stack } from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static" style={{ backgroundColor: '#171717', height: '70px', marginBottom: '50px'}}>
            <Stack direction="row" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
<<<<<<< Updated upstream
                width: "100%",
                height: "100%",
                marginBottom: "100",
=======
                marginBottom: "100",
                width: "100%", // Set width to 100% to cover the screen width
>>>>>>> Stashed changes
            }}>
                    <Box
                        sx={{
                            typography: 'header1',  
                            fontSize: '25px', 
                            color: 'white',
                    }}>popular listings</Box>
            </Stack>
        </AppBar>
    );
}