// import { getUserById } from "@/utils/db";
import prisma from "@/utils/db";
import ItemPost from "@/components/ItemComponents/ItemPost";
import { Container, Grid } from "@mui/material";
import NavBar from "@/components/MainPage/NavBar";
export default async function Home() {

  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // });

  const posts = await prisma.post.findMany({}).then((posts) => {
    return posts.map((post) => ({
      id: post.id,
      title: post.title,
      content: post.content,
    }));
  });
  
  return (
    // <Typography>{user.name}</Typography>
    <>
      <NavBar />
      <Container>
      <Grid container spacing={10}>
          {posts.map((post) => (
            <Grid item xs={3}>
                <ItemPost item={post} />
            </Grid>
          ))}
      </Grid>
    </Container>
    </>
    /*
      <AppBar>
        <Toolbar>
          <Box flexGrow={1}></Box>
          <Image
            src= "/bartrlogo.svg"
            alt="logo"
            width={400}
            height={80}
          />
          
          <Stack spacing={2} direction="row" >
            <Button variant="contained">LOG IN</Button>
            <Button variant="outlined">SIGN UP</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    */
  );
}
