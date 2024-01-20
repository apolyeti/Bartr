import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        email: 'hmuradya@ucsc.edu',
        name: 'Hovhannes Muradyan',
        location: 'College 9'
    },
    {
        email: 'aazhand@ucsc.edu',
        name: 'Arveen Azhand',
        location: 'College 9'
    }
];

const postData: Prisma.PostCreateInput[] = [
    {
        title: 'Infinity Edge',
        content: 'Willing to trade my Infinity Edge for a Bloodthirster',
        published: true,
        author: {
            connect: { email: 'hmuradya@ucsc.edu' }
        }
    },
    {
        title: 'Bloodthirster',
        content: 'Willing to trade my Bloodthirster for an Infinity Edge',
        published: true,
        author: {
            connect: { email: 'aazhand@ucsc.edu' }
        }
    }
];

async function main() {
    console.log(`Start seeding ...`)
    for (const u of userData) {
      const user = await prisma.user.create({
        data: u,
      })
      console.log(`Created user with id: ${user.id}`)
    }

    for (const p of postData) {
        const post = await prisma.post.create({
            data: p,
        })
        console.log(`Created post with id: ${post.id}`)
    }

    console.log(`Seeding finished.`)
  }
  
main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})