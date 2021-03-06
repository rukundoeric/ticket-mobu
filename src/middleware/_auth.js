/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import models from "../sequelize/models";
import { decodeToken } from "../helpers";

const { users, agency_users } = models;

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
    const { userId } = await decodeToken(token);
    try {
      const user = await users.findOne({ where: { userId } });
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

export const verifyToken1 = async (req, res, next) => {
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
    const { id } = await decodeToken(token);
    try {
      const user = await agency_users.findOne({ where: { id } });
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
