import { Subject } from './Subject';
import { Teacher } from './Teacher';

export class React {
  private subj: Subject = new Subject();

  setTeacher(teacher: Teacher) {
    this.subj.setTeacher(teacher);
  }

  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }

  getAvailableTeacher(): string {
    const t = this.subj.teacher;
    if (t && t.experienceTeachingReact && t.experienceTeachingReact > 0) {
      return `Available Teacher: ${t.firstName}`;
    }
    return 'No available teacher';
  }
}
