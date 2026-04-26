export const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};