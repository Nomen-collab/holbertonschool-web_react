/* task_1/js/main.ts */

/* Interface Teacher */
interface Teacher {
  readonly firstName: string;     // ne peut pas être modifié après initialisation
  readonly lastName: string;      // idem
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;     // optionnel
  location: string;
  [key: string]: any;             // permet d’ajouter d’autres propriétés dynamiques
}

/* Exemple : Teacher */
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

/* Interface Directors */
interface Directors extends Teacher {
  numberOfReports: number;
}

/* Exemple : Director */
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);
/* Interface pour la fonction printTeacher */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/* Implémentation de la fonction printTeacher */
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

/* Exemple d’utilisation */
console.log(printTeacher("John", "Doe")); // J. Doe
/* Interface du constructeur */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/* Interface de la classe */
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

/* Implémentation de la classe */
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

/* Exemple d’utilisation */
const student = new StudentClass("John", "Doe");
console.log(student.displayName());   // John
console.log(student.workOnHomework()); // Currently working

