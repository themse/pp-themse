import { ListProfessionalExperiencesController } from '@/server/controllers/professional-experience/list-professional-experience.controller';

const controller = new ListProfessionalExperiencesController();

export default controller.execute.bind(controller);
