import { ListSkillsController } from '@/server/controllers/skills/list-skills.controller';

const controller = new ListSkillsController();

export default controller.execute.bind(controller);
