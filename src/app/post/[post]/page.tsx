import Stack from '@mui/material/Stack';

import prisma from "@/utils/db";
import { notFound } from 'next/navigation';
import ItemPost from '@/components/ItemComponents/ItemPost';
import { Box, Button, Container, Typography } from '@mui/material';

import ItemRemoveButton from '@/components/ItemComponents/ItemRemoveButton';

export default async function Page({ params }: { params: { post: string } }) {
    
    let userId;
    const post = await prisma.post.findUniqueOrThrow({
        where: {
          id: parseInt(params.post),
        }}).then((post) => {
            userId = post.authorId;
            return {
                id: post.id,
                title: post.title,
                content: post.content,
                image: post.image,
            };
        }).catch((error) => {
            // make 404 page
            return notFound();
        });
    const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
    }) || {name: "User not found"};

    return (
        <Container>
            <Stack direction="row" >
                <Stack direction={"column"} spacing={2}>
                    <ItemPost item={post} showAll={true}/>
                    <ItemRemoveButton itemId={post.id}/>
                </Stack>
                <Box>
                    <Typography fontWeight="thin" variant="h5">{user.name}</Typography>
                    <Typography fontStyle="italic" fontWeight="thin" fontFamily="monospace" variant="h6">{post.content}</Typography>
                </Box>
            </Stack>
        </Container>
    ); 
}