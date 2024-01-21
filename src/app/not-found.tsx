import { Box, Typography, Container, Grid } from '@mui/material';

export default function NotFoundPage() {
    return (
        <Container>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center'}}>
                        {/* Combined text with line break */}
                        <Typography variant="h1" component="h1" sx={{whiteSpace: 'pre-line' }}>
                            404{'\n'}Page&nbsp;Not&nbsp;Found
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
