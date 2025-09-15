/* task_5/js/main.ts */

/* Définition des interfaces avec branding */
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits'; // branding unique
}

interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits'; // branding unique
}

/* Fonction pour additionner les crédits majeurs */
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits'
  };
}

/* Fonction pour additionner les crédits mineurs */
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits'
  };
}

/* Exemple d'utilisation */
const major1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 1, __brand: 'MinorCredits' };

console.log('Total Major Credits:', sumMajorCredits(major1, major2));
console.log('Total Minor Credits:', sumMinorCredits(minor1, minor2));

