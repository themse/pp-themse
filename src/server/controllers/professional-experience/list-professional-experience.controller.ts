import { NextApiRequest, NextApiResponse } from 'next';
import { compareDesc } from 'date-fns';

import db from '@/common/firebase/firebase-admin';
import { BaseController } from '../base.controller';

import { IProfessionalExperience } from '@/client/components/sections/resume/professional-experience/item'; // TODO

export class ListProfessionalExperiencesController extends BaseController {
  protected async executeImpl(
    _: NextApiRequest,
    res: NextApiResponse
  ): Promise<void | any> {
    try {
      const professionalExperienceRef = db.collection(
        'professional-experiences'
      );
      const snapshot = await professionalExperienceRef.get();

      if (snapshot.empty) {
        this.clientError(res, 'Incorrect document');
      }

      const professionalExperiences: IProfessionalExperience[] = [];
      snapshot.forEach((doc) => {
        //@ts-ignore TODO
        return professionalExperiences.push({ id: doc.id, ...doc.data() });
      });

      this.ok<{ professionalExperiences: IProfessionalExperience[] }>(res, {
        professionalExperiences: professionalExperiences.sort((a, b) =>
          compareDesc(new Date(a.from), new Date(b.from))
        ),
      });
    } catch (error) {
      return this.fail(res, error.toString());
    }
  }
}
