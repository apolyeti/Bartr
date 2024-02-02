import prisma from "@/utils/db";

export async function DELETE(req: Request, res: Response) {
    // body will consist of post id
    const body = await req.json();
    const postId = body.postId;

    // find post by id and remove it
    
    const post = await prisma.post.delete({
        where: {
            id: postId
        }
    });

    console.log('this is post')
    console.log(post);

    return Response.json({ success: true })
}