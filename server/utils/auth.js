import jwt from 'jsonwebtoken';

export const createJWT = (user, duration) => {
  const payload = {
    user,
    duration,
  };
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: duration,
  });
};
