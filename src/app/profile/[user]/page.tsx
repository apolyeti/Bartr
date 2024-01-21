import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import prisma from '@/utils/db';
import ItemPost from '@/components/ItemComponents/ItemPost';

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "black",
    },
    children: `${name.split(' ')[0][0]}`,
  };
}

export default async function Page({ params }: { params: { user: string } }) {

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.user),
    },
    }) || {name: "User not found", email: "", location: ""}

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

        <Stack spacing={5} sx={{
          padding: "4rem",
        }}>
          <Avatar sx={{
            width: 200, height:200
          }}>
            <Avatar {...stringAvatar({user.name})} />
          </Avatar>

          <Box >
            <Typography fontSize={25}>{user.name}</Typography>
            <Typography fontSize={15}>{user.email}</Typography>
            <Typography fontSize={15}>Location: {user.location}</Typography>
          </Box>
        </Stack>

        <Stack spacing={5} sx={{
          padding: "4rem",
        }}>
          <Typography fontSize={25}>My Listings</Typography>
            <Stack direction="row">
                {posts.map((post) => (
                <ItemPost item={post} showAll={false}/>
                ))}
            </Stack>          
          <Typography fontSize={25}>My Saves</Typography>
        </Stack>

    </Stack>
    ); 
}

