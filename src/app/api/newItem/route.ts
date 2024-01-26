import prisma from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from 'next'

export async function POST(req: NextApiRequest, res: NextApiResponse) {

    let { body } = req;
    let passedValue = await new Response(body).text();
    body = JSON.parse(passedValue);

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
            content: body.content,
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