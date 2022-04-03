import jsSHA from 'jssha';

const generateHash = (password) => {
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  shaObj.update(password);
  const hash = shaObj.getHash('HEX');
  return hash;
};

export default function initPlacesController(db) {
  const login = async (req, res) => {
    console.log(req.body);
    const user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    console.log(user);

    if (!user) {
      res.send({ message: 'No such email exists. Please try again.' });
    }
    else {
      // TODO: VALIDATE SUCCESSFUL LOGIN WITH PASSOWRD HASHING
      const userPassword = req.body.password;
      const hashedPassword = generateHash(userPassword);

      console.log(user.dataValues.password);
      console.log(hashedPassword);

      if (hashedPassword !== user.dataValues.password) {
        res.send({ message: 'Wrong passowrd. Please try again.' });
      }
      else {
        res.cookie(`userId=${user.dataValues.id};`);
        res.cookie(`login=${generateHash(user.dataValues.id)};`);
        res.send({ message: 'logging in' });
      }
    }
  };

  const checkAuth = async (req, res) => {
    console.log('checking auth');
    console.log(req.body);
    const { userId, loginHash } = req.body;

    if (generateHash(Number(userId)) === loginHash && userId && loginHash) {
      res.send({ message: true });
    }
    else {
      res.send({ message: false });
    }
  };

  return {
    login, checkAuth,
  };
}
