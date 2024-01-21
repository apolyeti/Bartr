"use client"
import React, {useState, ChangeEvent} from "react";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Container, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
<<<<<<< Updated upstream
import {useSession} from "next-auth/react";
=======
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


>>>>>>> Stashed changes

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
    const {data: session} = useSession();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
    });

    const [category, setCat] = React.useState('');
    
    const handleSelect = (event: SelectChangeEvent) => {
        setCat(event.target.value as string);
      };
    
    const handleChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [field]: event.target.value,
        });
    };
    
    const handleSubmit = async () =>{

        console.log(formData)
        const response = await fetch('/api/newitem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            //credentials: "include",
            body: JSON.stringify({
                title: formData.title,
                content: formData.description,
                location: formData.location,
                image: "https://cdn.discordapp.com/attachments/1157200811282157598/1198425009820020787/sweater1.jpg?ex=65bedb44&is=65ac6644&hm=30876b99b66f4337603ec747efe2780ee0daad91a1d376fe355050d596abf7ca&",
                author: session?.user?.email,
            })
        });

        const data = await response.json();
        console.log(data);
        window.location.href = "/";
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

            >   <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={category}
                    label="Category"
                    onChange={handleSelect}
                    sx={{ width: '175px' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='1'>Goods</MenuItem>
                    <MenuItem value='2'>Services</MenuItem>
                </Select>
                
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
