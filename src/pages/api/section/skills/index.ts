import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
//@ts-ignore
import skillsList from '../../../../data/skills-list';

const handler = nc().get((req: NextApiRequest, res: NextApiResponse) => {
  res.json({ data: skillsList });
  res.end();
});

export default handler;
