const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });
  console.log('Created new user:', newUser);

  // Read all users
  const allUsers = await prisma.user.findMany();
  console.log('All users:', allUsers);

  // Update a user
  const updatedUser = await prisma.user.update({
    where: { email: 'alice@example.com' },
    data: { name: 'Alice Wonderland' },
  });
  console.log('Updated user:', updatedUser);

  // Delete a user
  const deletedUser = await prisma.user.delete({
    where: { email: 'alice@example.com' },
  });
  console.log('Deleted user:', deletedUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
