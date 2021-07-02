const { User } = require("../models/User");

const auth = (req, res, next) => {
  // 1. 클라이이언트 쿠키에서 토큰을 가져온다.
  const token = req.cookies.x_auth;
  // 2. 토큰을 복호화하고 서버 정보에서 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) return res.send(err);
    if (!user) return res.json({ isAuth: false, error: true });
    req.user = user;
    req.token = token;
    next();
  });
  // 3. 유저가 있으면 인증 ok
};

module.exports = { auth };
