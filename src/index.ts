import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3001;

// Middleware to log request method and URL
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/about', (req: Request, res: Response) => {
  res.send('About Us');
});

app.get('/contact', (req: Request, res: Response) => {
  res.send('Contact Us');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
