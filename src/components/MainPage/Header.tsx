import { AppBar, Box, Stack } from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static" style={{ backgroundColor: '#171717', height: '70px', marginBottom: '50px'}}>
            <Stack direction="row" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                marginBottom: "100",
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