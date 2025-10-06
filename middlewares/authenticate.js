import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];  

  if (!token) return res.status(401).json({ message: "Access denied, token missing" });

  try {
    const decoded = jwt.verify(token, "your_jwt_secret_key");  
    req.user = decoded;  
    next();  
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};
