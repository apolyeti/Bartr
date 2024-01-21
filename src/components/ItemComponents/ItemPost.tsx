// this will be the simple card component that displays a picture of an item, 
// the name of the item, and the location of the user who posted it
import type { Item } from "@utils/types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CardMedia, Typography } from "@mui/material";

import NextLink from 'next/link';


interface ItemPostProps {
    item: {
        id: number;
        title: string;
        content: string | null;
    }
}

let location = "College 9"; 
// location will be determined by user id, which is a property of the item

export default function ItemPost({ item }: ItemPostProps) {
    return (
        <NextLink href={`/post/${item.id}`}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 300,
                    height: 400,
                    margin: 2,
                    boxShadow: 0
                }}
            >
                <CardMedia
                    image="https://cdn.discordapp.com/attachments/1157200811282157598/1198424995077034054/hat.jpeg?ex=65bedb40&is=65ac6640&hm=004d01afe509f01244eb7c4beabe70ff95580962ee98d8a14e8ceb94d3ac32b3&"
                    component="img"
                    sx={{
                        width: 275,
                        height: 300,
                    }}
                />
                <CardContent sx={{height: "25%", margin: 0}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {location}
                    </Typography>
                </CardContent>
            </Card>
        </NextLink>
    );
}