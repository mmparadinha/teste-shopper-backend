import type { Request, Response } from 'express';

export default async function healthCheck (req: Request, res: Response) {
  return res.sendStatus(204);
}
