import { AppBar, Box, Stack } from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static" style={{ backgroundColor: '#171717', height: '70px'}}>
            <Stack direction="row" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%", // Set width to 100% to cover the screen width
            }}>
                <div>
                    <Box
                        sx={{
                            typography: 'header1',        
                            mx: 'auto',
                            fontWeight: 'bold',
                            fontSize: '45px', 
                            fontFamily: 'Helvetica Neue', 
                            color: 'white',
                    }}>popular listings</Box>
                </div>
            </Stack>
        </AppBar>
    );
}