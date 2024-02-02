import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import prisma from '@/utils/db';
import ItemPost from '@/components/ItemComponents/ItemPost';
import { notFound } from 'next/navigation';
import Divider from '@mui/material/Divider';

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "primary.main",
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default async function Page({ params }: { params: { user: string } }) {

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: parseInt(params.user),
    },
    }).catch((error) => {
        // make 404 page
        return notFound();
        }
    );

    const posts = await prisma.post.findMany({
      where: {
        authorId: parseInt(params.user),
      },
    }).then((posts) => {
      return posts.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        image: post.image,
      }));
    });

    

    return (
      <Stack direction="row" alignItems={"flex-start"} sx={{
        alignItems: "left",
        width: "100%", 
        padding: "1rem",
        marginRight: "10px",
      }}>

        <Stack spacing={2} direction="row" sx={{
          padding: "4rem",
        }}>
          <Avatar {...stringAvatar(user.name)} sx={{
            width: 200, height:200, fontSize: 64
          }} />
          <Stack spacing={2} direction="column" sx={{
          padding: "4rem",
          }}>
            <Typography fontSize={25}>{user.name}</Typography>
            <Divider />

            <Box >
              <Typography fontSize={15}>{user.email}</Typography>
              <Typography fontSize={15}>Location: {user.location}</Typography>
            </Box>
          </Stack>
        </Stack>

        <Stack spacing={2} sx={{
          padding: "4rem",
        }}>
          <Typography fontSize={25}>Listings</Typography>
            <Stack direction="row">
                {posts.map((post) => (
                  <span>
                    <ItemPost item={post} showAll={false} key={post.id}/>
                  </span>
                ))}
            </Stack>
        </Stack>

    </Stack>
    ); 
}

