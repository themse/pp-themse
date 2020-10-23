import { NextApiRequest, NextApiResponse } from 'next';
import { compareDesc } from 'date-fns';

import db from '@/common/firebase/firebase-admin';
import { BaseController } from '../base.controller';

import { ICareer } from '@/client/components/sections/resume/career/item'; // TODO

export class ListCareerController extends BaseController {
  protected async executeImpl(
    _: NextApiRequest,
    res: NextApiResponse
  ): Promise<void | any> {
    try {
      const careerListRef = db.collection('professional-experiences');
      const snapshot = await careerListRef.get();

      if (snapshot.empty) {
        this.clientError(res, 'Incorrect document');
      }

      const careerList: ICareer[] = [];
      snapshot.forEach((doc) => {
        //@ts-ignore TODO
        return careerList.push({ id: doc.id, ...doc.data() });
      });

      this.ok<{ careerList: ICareer[] }>(res, {
        careerList: careerList.sort((a, b) =>
          compareDesc(new Date(a.from), new Date(b.from))
        ),
      });
    } catch (error) {
      return this.fail(res, error.toString());
    }
  }
}
