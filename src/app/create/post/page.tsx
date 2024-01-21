import { Container, FormControl, FormHelperText, Input, InputLabel } from "@mui/material"

export default function Page() {
    return (
        <Container>
            <FormControl>
                <InputLabel htmlFor="post-title">Title</InputLabel>
                <Input id="post-title" aria-describedby="title-helper" />
                <FormHelperText id="title-helper">Enter a title for your post</FormHelperText>

                <InputLabel htmlFor="post-content">Description</InputLabel>
                <Input id="post-content" aria-describedby="content-helper" />
                <FormHelperText id="content-helper">Enter a description for your post</FormHelperText>
                
            </FormControl>
        </Container>
    )
}