// pages/api/user.js
import prisma from "@/utils/db";
import { NextApiRequest, NextApiResponse } from 'next';


export async function POST(request: Request, res: Response) {

    const body = await request.json();
  
    
    if (body && body.name && body.email) {
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });
      console.log("User:", user);
  
      if (!user) {
        await prisma.user.create({
          data: {
            email: body.email,
            name: body.name,
            location: "College 10",
          },
        });
      }
    }
  
    //res.status(200).json({ success: true });
    return Response.json({ success: true })
  }

// export default async function handler(req : NextApiRequest, res: NextApiResponse) { 
//     console.log('test')
//   const { session } = req.body;

//   if (session && session.user?.email && session.user?.name) {
//     const user = await prisma.user.findUnique({
//       where: {
//         email: session.user.email,
//       },
//     });

//     if (!user) {
//       await prisma.user.create({
//         data: {
//           email: session.user.email,
//           name: session.user.name,
//           location: "College 10",
//         },
//       });
//     }
//   }

//   res.status(200).json({ success: true });
// }
