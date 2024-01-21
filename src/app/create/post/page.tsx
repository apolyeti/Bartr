"use client"
import React from "react";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Container, FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { styled } from '@mui/material/styles';

const ariaLabel = { 'aria-label': 'description' };

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

export default function Page() {
    return (
        <Stack spacing={2} direction="column" alignItems={"flex-start"} sx={{padding:"8rem"}}>

            <Button color="primary" component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>


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

                <Input placeholder="Location" inputProps={ariaLabel} />
                <FormHelperText id="my-helper-text">Where are you located?</FormHelperText>
            </Box>

            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>


        </Stack>
        
        
        
    );
}
