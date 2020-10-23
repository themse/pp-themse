import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  res.json({
    hello: 'World',
  });
};

export default handler;
