import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "priyanka1234", {
    expiresIn: "30d",
  });
};

export default generateToken;
