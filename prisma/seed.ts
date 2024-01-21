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
        },
        image: "https://media.discordapp.net/attachments/1198426381378404552/1198439373155340358/artworks-000065334969-gmnp3t-t500x500.png?ex=65bee8a4&is=65ac73a4&hm=741bd44dd5a581abe0d7fb05963ad12d96b03fd0bfead0c17235842d96c2f6c7&=&format=webp&quality=lossless&width=1000&height=1000"
    },
    {
        title: 'Bloodthirster',
        content: 'Willing to trade my Bloodthirster for an Infinity Edge',
        published: true,
        author: {
            connect: { email: 'aazhand@ucsc.edu' }
        },
        image: "https://cdn.discordapp.com/attachments/1172344860708180040/1181819457153277972/Screenshot_2023-12-05_at_8.48.14_PM.png?ex=65b9d123&is=65a75c23&hm=359041e945b0017ea292117584a70c87967168d8bcccccadce33c28285ebaeb2&"
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