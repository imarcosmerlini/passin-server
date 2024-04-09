import {prisma} from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: '05e0faae-b83b-4f39-adb9-c8f264a78bf0',
      title: 'Surface Engine',
      slug: 'surface-engine',
      details: 'A new engine for the surface of the moon',
      maximumAttendees: 100,
    }
  })
}

seed().then(() => {
    console.log('Database seeded!');
    prisma.$disconnect();
});