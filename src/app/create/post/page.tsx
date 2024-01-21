import React from "react";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import TextField from '@mui/material/TextField';
import { Container, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";

const ariaLabel = { 'aria-label': 'description' };

export default function Page() {
    return (
        <Stack direction="column" alignItems={"flex-start"}>
            <Box component="form" sx={{
                '& > :not(style)': { m: 1 },
                padding:"2rem"
            }}
                noValidate
                autoComplete="off"
            >
                <Input placeholder="Title" inputProps={ariaLabel} />
                <FormHelperText id="my-helper-text">Enter a title.</FormHelperText>

                <Input placeholder="Description" inputProps={ariaLabel} />
                <FormHelperText id="my-helper-text">Enter a description.</FormHelperText>
            </Box>


        </Stack>
        
        
        
    );
}
