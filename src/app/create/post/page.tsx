"use client"
import React, {useState, ChangeEvent} from "react";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Container, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
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
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
    });
    
    const handleChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [field]: event.target.value,
        });
      };
      
    const handleSubmit = () =>{
    
        console.log(formData)
    }
    
    return (
            <Stack spacing={2} direction="column" alignItems={"flex-start"} sx={{padding:"8rem"}}>

            <Button color="secondary" component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>


            <Box component="form" sx={{
                '& > :not(style)': { m: 1 },
            }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="standard-basic" 
                    label="Enter a title." 
                    variant="standard" 
                    value={formData.title}
                    onChange={handleChange('title')}
                />

                <TextField 
                    id="standard-basic" 
                    label="Enter a description." 
                    variant="standard"
                    value={formData.description}
                    onChange={handleChange('description')}
                />

                <TextField 
                    id="standard-basic" 
                    label="Enter a location." 
                    variant="standard" 
                    value={formData.location}
                    onChange={handleChange('location')}
                />
            </Box>
            


            <Button color="primary" component="label" variant="contained" onClick={handleSubmit}>
                Post listing
            </Button>

            </Stack>
        
    );
}
