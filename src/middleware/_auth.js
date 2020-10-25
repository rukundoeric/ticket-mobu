import models from "../sequelize/models";
import { decodeToken } from "../helpers";

const { users } = models;

export const verifyToken = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({
      status: 401,
      error: {
        message: "Token is missing",
      },
    });
  }
  try {
    const { email } = await decodeToken(token);
    try {
      const user = await users.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({
          status: 400,
          error: {
            message: "Invalid token",
          },
        });
      }
      req.token = token;
      req.user = user;
      next();
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error,
      });
    }
  } catch (error) {
    if (error.name && error.name === "TokenExpiredError") {
      return res.status(401).json({
        status: 401,
        message: error.message,
      });
    }
    return res.status(500).json({
      status: 500,
      error,
    });
  }
};
