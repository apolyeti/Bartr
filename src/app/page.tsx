import Image from "next/image";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function Home() {
  return (
      <Container maxWidth={false} sx={{ backgroundColor: "black", marginTop: "2rem 0", width: "100%"}}>
        <Image
          src= "/bartrlogo.svg"
          alt="logo"
          width={400}
          height={80}
        />
        
        <Stack spacing={2} direction="row">
          <Button variant="contained">LOG IN</Button>
          <Button variant="outlined">SIGN UP</Button>
        </Stack>
      </Container>
  );
}
