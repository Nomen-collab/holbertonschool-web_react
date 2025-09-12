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

