import prisma from "@/utils/db";

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    const email = body.email;
    if (email) {
        // find userid by email
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (user) {
            return Response.json({ success: true, userId: user.id })
        }
    }
    return Response.json({ success: false })
}