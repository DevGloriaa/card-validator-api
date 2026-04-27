import express, { Application, Request, Response } from 'express';
import validationRoutes from './routes/validation.route';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1/card', validationRoutes);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'API is running smoothly' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});