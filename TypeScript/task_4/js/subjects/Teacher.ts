export interface Teacher {
  firstName: string;
  lastName: string;
  age?: number;

  // expériences optionnelles pour chaque matière
  experienceTeachingC?: number;
  experienceTeachingReact?: number;
  experienceTeachingJava?: number;
}
