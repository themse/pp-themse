import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get((_: NextApiRequest, res: NextApiResponse) => {
    res.json({
      hello: 'World',
    });
  });

export default handler;
