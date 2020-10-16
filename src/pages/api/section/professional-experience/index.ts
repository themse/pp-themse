import nc from 'next-connect';
import cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

import db from '../../../../common/firebase/firebase-admin';
import { IProfessionalExperience } from '../../../../components/sections/resume/professional-experience/item';

const handler = nc()
  .use(cors())
  .get(async (_: NextApiRequest, res: NextApiResponse) => {
    const professionalExperienceRef = db.collection('professional-experiences');
    const snapshot = await professionalExperienceRef.get();

    if (snapshot.empty) {
      res
        .status(400)
        .json({ error: 'Bad Request', message: 'Incorrect document' });
    }

    const professionalExperiences: IProfessionalExperience[] = [];
    snapshot.forEach((doc) => {
      //@ts-ignore TODO
      return professionalExperiences.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json({ professionalExperiences });
  });

export default handler;
