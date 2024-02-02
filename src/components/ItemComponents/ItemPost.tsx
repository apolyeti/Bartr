// this will be the simple card component that displays a picture of an item, 
// the name of the item, and the location of the user who posted it
import type { Item } from "@utils/types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CardMedia, Typography } from "@mui/material";
import prisma from "@/utils/db";
import NextLink from 'next/link';

import cld from '@/utils/cloudinary';


interface ItemPostProps {
    item: {
        id: number;
        title: string;
        content: string | null;
        image: string;
    },
    showAll?: boolean;
}

export default async function ItemPost({ showAll, item }: ItemPostProps) {
    // find the actual item in database using the id,
    // then find the userid of the item, then find the user's location
    let location = "Location not found";
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: item.id,
            },
        });

        if (!post) {
            throw new Error("Post not found");
        }

        const authorId = post.authorId;
        

        const user = await prisma.user.findUnique({
            where: {
                id: post.authorId,
            },
        });

        if (!user) {
            throw new Error("User not found");
        }

        location = user.location;
    } catch (error) {
        console.log(error);
    }

    console.log(cld.image(item.image).toURL());

    return (
        <NextLink href={`/post/${item.id}`}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 300,
                    height: 450,
                    margin: 2,
                    boxShadow: 0
                }}
            >
                <CardMedia
                    src={cld.image(item.image).toURL()}
                    component="img"
                    sx={{
                        width: 275,
                        height: 300,
                    }}
                />
                    {showAll && <CardContent sx={{height: "25%", margin: 0}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                    
                        <Typography variant="body2" color="text.secondary">
                            {location}
                        </Typography>
                        
                        <></>
                    
                    </CardContent>}
                    
            </Card>
        </NextLink>
    );
}