import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
//@ts-ignore
import skillsList from '../../../../data/skills-list';

const handler = nc().get((_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data: skillsList });
});

export default handler;
