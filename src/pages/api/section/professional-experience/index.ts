import nc from 'next-connect';
import cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';
//@ts-ignore
import profExpiriences from '../../../../data/professional-experience-list';

const handler = nc()
  .use(cors())
  .get((req: NextApiRequest, res: NextApiResponse) => {
    res.json({ data: profExpiriences });
    res.end();
  });

export default handler;
