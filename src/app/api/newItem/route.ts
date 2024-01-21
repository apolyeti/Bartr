import prisma from "@/utils/db";


export async function POST(req: Request, res: Response) {

    const body = await req.json();
    console.log('this is the body')
    console.log(body)
    const email = body.author;
    let userId = -5;
    // find userid by email
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    // add to prisma database
    if (user) {
        userId = user.id;
    }
    const newItem = await prisma.post.create({
        data: {
            title: body.title,
            content: body.description,
            image: body.image,
            published: true,
            author: {
                connect: { id: userId }
            },
        },
    });
    console.log('this is newItem')
    console.log(newItem);

    return Response.json({ success: true })
}