"use client"
import React, {useState, ChangeEvent} from "react";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Container, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import {useSession} from "next-auth/react";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { AdvancedImage } from "@cloudinary/react";
import cld from '@/utils/cloudinary';
// @ts-ignore no types
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'

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

    // const myImage = cld.image('post');
    
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
        const response = await fetch('/api/newItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            //credentials: "include",
            body: JSON.stringify({
                title: formData.title,
                content: formData.description,
                location: formData.location,
                image: document.getElementsByName('public_id')[0].getAttribute('value'),
                author: session?.user?.email,
            })
        });

        const data = await response.json();
        console.log(data);
        window.location.href = "/";
    }
    
    return (
            <Stack spacing={2} direction="column" alignItems={"flex-start"} sx={{padding:"8rem"}}>
                <WidgetLoader />
                {/* <AdvancedImage cldImg={myImage} /> */}
                <Widget
                    sources={['local']}
                    resourceType={'image'}
                    cloudName={'drlc0eeh7'}
                    uploadPreset={'preset1'}
                    buttonText={'Upload Image'}
                    style={{
                        color: 'black',
                        border: 'none',
                        backgroundColor: '#82AF81',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
                        height: '40px',
                        fontFamily: 'Druk Wide Web Super',
                    }}
                    folder={'posts'} // set cloudinary folder name to send file
                    cropping={true}
                    multiple={false} // set to false as default. Allows multiple file uploading
                    // will only allow 1 file to be uploaded if cropping set to true
                    autoClose={false} // will close the widget after success. Default true
                    onSuccess={(result: any) =>
                        {
                            // get element named 'public_id' from page and set its value to the result
                            // of the upload widget
                            const publicId = document.getElementsByName('public_id');
                            publicId[0].setAttribute('value', result.info.public_id);
                            console.log(publicId[0].getAttribute('value'));
                        }
                    } // add success callback -> returns result
                    onFailure={() => 
                        {
                            console.log('failure')
                        }
                    } // add failure callback -> returns 'response.error' + 'response.result'
                    logging={true} // logs will be provided for success and failure messages,
                    // set to false for production -> default = true
                    customPublicId={'post'} // set a specific custom public_id.
                    // To use the file name as the public_id use 'use_filename={true}' parameter
                    eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
                    use_filename={false} // tell Cloudinary to use the original name of the uploaded
                    // file as its public ID -> default = true,

                    widgetStyles={{
                        palette: {
                            window: '#737373',
                            windowBorder: '#FFFFFF',
                            tabIcon: '#82AF81',
                            menuIcons: '#D7D7D8',
                            textDark: '#DEDEDE',
                            textLight: '#FFFFFF',
                            link: '#82AF81',
                            action: '#FF620C',
                            inactiveTabIcon: '#B3B3B3',
                            error: '#F44235',
                            inProgress: '#0078FF',
                            complete: '#20B832',
                            sourceBg: '#909090'
                        },
                        fonts: {
                            "default": null,
                            "Druk Wide Web Super": {
                                url: 'https://fonts.googleapis.com/css2?family=Druk:wght@800&display=swap',
                                active: true
                            }
                        }
                    }} // ability to customise the style of the widget uploader
                    destroy={true} // will destroy the widget on completion
                />

                {/* <Button color="secondary" component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                    Upload file
                    <VisuallyHiddenInput type="file" />
                </Button> */}


                <Box component="form" sx={{
                    '& > :not(style)': { m: 1 },
                }}
                    noValidate
                    autoComplete="off"

                >   
                    <input type="hidden" name="public_id" />
                    <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
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
