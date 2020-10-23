import { NextApiRequest, NextApiResponse } from 'next';

import db from '@/common/firebase/firebase-admin';
import { BaseController } from '../base.controller';

import { ISkill } from '@/client/components/sections/skills/types'; // TODO don't import from client

export class ListSkillsController extends BaseController {
  protected async executeImpl(
    _: NextApiRequest,
    res: NextApiResponse
  ): Promise<void | any> {
    try {
      const skillsRef = db.collection('skills');
      const snapshot = await skillsRef.get();

      if (snapshot.empty) {
        this.clientError(res, 'Incorrect document');
      }

      const skillsList: ISkill[] = [];
      // @ts-ignore
      snapshot.forEach((doc) => skillsList.push({ id: doc.id, ...doc.data() }));

      this.ok<{ skillsList: ISkill[] }>(res, { skillsList });
    } catch (error) {
      return this.fail(res, error.toString());
    }
  }
}
