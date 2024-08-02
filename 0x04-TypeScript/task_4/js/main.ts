// create and export a constant cpp for Cpp Subjects
// create and export a constant java for Java Subjects
// create and export a constant react for React Subjects
// create and export one Teacher object cTeacher with experienceTeachingC = 10
// for Cpp subject, log to the console C++, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher and print the strings they return
// for Java subject, log to the console Java, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
// for React subject, log to the console React, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return

import { Teacher } from "./Teacher";
import { Subject } from "./Subject";

declare module "./Teacher" {
    interface Teacher {
        experienceTeachingC?: number;
    }
}

export interface Subjects {
    Teacher: Teacher;
    Subject: Subject;
}

export class Cpp extends Subject {
    getRequirements(): string {
        return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingC === undefined) {
            return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
}

export { Subjects };
