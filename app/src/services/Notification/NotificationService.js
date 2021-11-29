const NotificationRepository = require("../../repository/Notification/NotificationRepository");

class NotificationService {
  constructor(req) {
    this.params = req.params;
    this.body = req.body;
  }

  async create() {
    const userNo = this.params.userNo;
    const token = this.body.token;
    try {
      await NotificationRepository.create(userNo, token);

      return { msg: "token 저장 완료" };
    } catch (err) {
      throw err;
    }
  }

  async findTokenByUserNo() {
    const userNo = this.params.userNo;
    try {
      const token = await NotificationRepository.findTokenByUserNo(userNo);

      return token;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = NotificationService;
