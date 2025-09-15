import { Cpp } from './subjects/Cpp';
import { React } from './subjects/React';
import { Java } from './subjects/Java';
import { Teacher } from './subjects/Teacher';
import { Subject } from './subjects/Subject';

// Test Cpp
const cpp = new Cpp();
const teacherA: Teacher = {
  firstName: 'Alice',
  lastName: 'Dupont',
  experienceTeachingC: 5,
};
cpp.setTeacher(teacherA as Teacher);
console.log(cpp.getRequirements());            // Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher());        // Available Teacher: Alice

// Test React (enseignant sans expérience)
const reactCourse = new React();
const teacherB: Teacher = {
  firstName: 'Bob',
  lastName: 'Martin',
  // pas d'experienceTeachingReact
};
reactCourse.setTeacher(teacherB as Teacher);
console.log(reactCourse.getRequirements());    // Here is the list of requirements for React
console.log(reactCourse.getAvailableTeacher()); // No available teacher

// Test Java
const javaCourse = new Java();
const teacherC: Teacher = {
  firstName: 'Carol',
  lastName: 'Nguyen',
  experienceTeachingJava: 3,
};
javaCourse.setTeacher(teacherC);
console.log(javaCourse.getRequirements());     // Here is the list of requirements for Java
console.log(javaCourse.getAvailableTeacher()); // Available Teacher: Carol
