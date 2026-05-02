import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "CI/CD Masterclass APi",
    status: "ok",
  });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "healthy",
  });
});

export { app };

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
