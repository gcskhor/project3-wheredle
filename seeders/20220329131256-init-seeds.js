const jsSHA = require('jssha');

module.exports = {
  up: async (queryInterface) => {
    const userPassword = 'a';
    const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
    shaObj.update(userPassword);
    const hashedPassword = shaObj.getHash('HEX');

    const usersList = [
      {
        email: '1@1.com',
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: '2@2.com',
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('users', usersList, { returning: true });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
