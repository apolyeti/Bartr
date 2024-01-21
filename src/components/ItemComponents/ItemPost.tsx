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
        image: string;
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
                    image={item.image}
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