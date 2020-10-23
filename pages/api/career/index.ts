import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import cors from 'cors';

import { ListCareerController } from '@/server/controllers/career/list-career.controller';

const handler = nc()
  .use(cors())
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const controller = new ListCareerController();
    await controller.execute(req, res);
  });

export default handler;
