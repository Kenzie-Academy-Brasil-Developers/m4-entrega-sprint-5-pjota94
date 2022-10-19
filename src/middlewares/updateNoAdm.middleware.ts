import { NextFunction, Request, Response } from "express";

const updateNoAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id;
  if (!req.user.isAdm && req.user.id !== id) {
    return res.status(401).json({ message: "You are not admin" });
  }

  return next();
};

export default updateNoAdmMiddleware;
