import jsSHA from 'jssha';

const generateHash = (password) => {
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  shaObj.update(password);
  const hash = shaObj.getHash('HEX');
  return hash;
};

export default function initUsersController(db) {
  const login = async (req, res) => {
    try {
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
        const userPassword = req.body.password;
        const hashedPassword = generateHash(userPassword);

        console.log(user.dataValues.password);
        console.log(hashedPassword);

        if (hashedPassword !== user.dataValues.password) {
          res.send({ message: 'Wrong password. Please try again.' });
        }
        else {
          res.cookie(`userId=${user.dataValues.id};`);
          res.cookie(`login=${generateHash(user.dataValues.id)};`);
          res.send({ message: 'logging in' });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (req, res) => {
    try {
      console.log(req.body);
      const { email, password } = req.body;
      const createdUser = await db.User.create({
        email,
        password: generateHash(password),
      });
      console.log(createdUser);
      if (!createdUser) {
        res.status(409).send({ message: 'email already exists' });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (req, res) => {
    console.log(res);

    res.clearCookie('userId');
    res.clearCookie('login');
    // HOW TO CLEAR COOKIES AT LOGOUT?
    res.send({});
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
    login, signup, logout, checkAuth,
  };
}
