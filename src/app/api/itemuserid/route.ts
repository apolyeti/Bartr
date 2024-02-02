import prisma from "@/utils/db";

export async function GET(req: Request, res: Response) {
    console.log("lol", req)
    const item = await prisma.post.findMany({
        where: {
            id: 1
        }
    });

    return Response.json(item[0].authorId);
}