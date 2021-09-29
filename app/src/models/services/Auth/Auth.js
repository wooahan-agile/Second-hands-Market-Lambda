const jwt = require("jsonwebtoken");

class Auth {
  static async createJWT(user) {
    const payload = {
      nickname: user.nickname,
      email: user.email,
      name: user.name,
      profilePath: user.profile_img_url,
    };

    return jwt.sign(payload, process.env.JWT_SECRET || "", {
      algorithm: "HS256",
      expiresIn: "1d",
      issuer: "wooahan agile",
    });
  }

  static async verifyJWT(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
      return decoded;
    } catch (err) {
      return { err };
    }
  }
}

module.exports = Auth;
