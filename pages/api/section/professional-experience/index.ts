import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import cors from 'cors';

import { ListProfessionalExperiencesController } from '@/server/controllers/professional-experience/list-professional-experience.controller';

const handler = nc()
  .use(cors())
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const controller = new ListProfessionalExperiencesController();
    await controller.execute(req, res);
  });

export default handler;
