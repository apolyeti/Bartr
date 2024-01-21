import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import prisma from "@/utils/db";
import { cache } from 'react';
import { notFound } from 'next/navigation';
import ItemPost from '@/components/ItemComponents/ItemPost';

export default async function Page({ params }: { params: { post: string } }) {
    
    const post = await prisma.post.findUniqueOrThrow({
        where: {
          id: parseInt(params.post),
        }}).then((post) => {
            return {
                id: post.id,
                title: post.title,
                content: post.content,
            };
        }).catch((error) => {
            // make 404 page
            return notFound();
        });

    return (
      <Stack>
        <ItemPost item={post} />
      </Stack>
    ); 
}