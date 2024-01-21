// 404 page
// ----------------------------------------------------------------------
import { Box, Typography, Container, Grid } from '@mui/material';

export default function NotFoundPage() {
    return (
        <Container>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <Typography variant="h1" component="h1" gutterBottom>
                            404 | Page Not Found
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}