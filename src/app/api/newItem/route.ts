import prisma from "@/utils/db";


export default async function POST(req: Request, res: Response) {
    const body = await req.json();

    if (body) {
        // add item to db
        await prisma.post.create({
            data: {
                title: body.name,
                content: body.description,
                authorId: body.authorId,
                image: body.image_url,
                published: true,
                author: {
                    connect: { id: body.authorId },
                },
            },
        });
    }

    return Response.json({ success: true })
}