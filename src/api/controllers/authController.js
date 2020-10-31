/* eslint-disable linebreak-style */
import { comparePassword, generateToken } from "../../helpers";

/**
 * @Author - Eric prestein
 */
class authController {
  /**
   *
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @returns {Object} - Response object
   */
  static async login(req, res) {
    const { password } = req.body;
    const { user } = req;
    const { userId, email } = user;
    const isPasswordCorrect = await comparePassword(password, user.password);
    if (isPasswordCorrect) {
      const token = await generateToken({ userId, email });

      return res.status(200).json({
        status: 200,
        data: {
          token,
        }
      });
    }
    return res.status(400).json({
      status: 400,
      error: {
        message: 'Incorrect password',
      }
    });
  }
  /**
   *
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @returns {Object} - Response object
   */
  static async agencylogin(req, res) {
    const { password } = req.body;
    const { user } = req;
    const { id, email } = user;
    const isPasswordCorrect = await comparePassword(password, user.password);
    if (isPasswordCorrect) {
      const token = await generateToken({ id, email });

      return res.status(200).json({
        status: 200,
        data: {
          token,
        }
      });
    }
    return res.status(400).json({
      status: 400,
      error: {
        message: 'Incorrect password',
      }
    });
  }
}

export default authController;
