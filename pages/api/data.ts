// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import data from '../../assets/data.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof data>
) {
  res.status(200).json(data);
}
