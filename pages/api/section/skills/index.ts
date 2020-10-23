import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import cors from 'cors';

import { ListSkillsController } from '@/server/controllers/skills/list-skills.controller';

const handler = nc()
  .use(cors())
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const controller = new ListSkillsController();
    await controller.execute(req, res);
  });

export default handler;
