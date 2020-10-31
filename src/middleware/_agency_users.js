import models from "../sequelize/models";

const { agency_users: users } = models;

export default [
  // Check if User alread exist [0]
  async (req, res, next) => {
    const { email } = req.body;
    const user = await users.findOne({
      where: { email },
    });
    if (user) {
      return res.status(400).json({
        status: 400,
        error: {
          message: "User already exist",
        },
      });
    }
    next();
  },
  // Check if User is manager [1]
  async (req, res, next) => {
    const { role } = req.user;

    if (role !== "manager") {
      return res.status(403).json({
        status: 403,
        error: {
          message: "You seem not to be authorized to access this content",
        },
      });
    }
    next();
  },
  // Check if User is teller or manager [2]
  async (req, res, next) => {
    const {} = req.user;
    if (role !== "teller" || role !== "manager") {
      return res.status(403).json({
        status: 403,
        error: {
          message: "You seem not to be authorized to access this content",
        },
      });
    }
    next();
  },
  // Check If User is not exist [3]
  async (req, res, next) => {
    const { email } = req.body;
    const user = await users.findOne({
      where: { email },
    });
    if (!user) {
      return res.status(400).json({
        status: 400,
        error: {
          message: "User not exist",
        },
      });
    }
    req.user = user;
    next();
  },
];
