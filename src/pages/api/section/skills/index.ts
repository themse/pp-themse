import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import db from '../../../../common/firebase/firebase-admin';
import { ISkill } from '../../../../components/sections/skills/types';

const handler = nc().get(async (_: NextApiRequest, res: NextApiResponse) => {
  const skillsRef = db.collection('skills');
  const snapshot = await skillsRef.get();

  if (snapshot.empty) {
    res
      .status(400)
      .json({ error: 'Bad Request', message: 'Incorrect document' });
  }

  const skillsList: ISkill[] = [];
  // @ts-ignore
  snapshot.forEach((doc) => skillsList.push({ id: doc.id, ...doc.data() }));
  res.status(200).json({ skillsList });
});

export default handler;
