/*
Atividade 01
*/

class Person {
  constructor(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    return `Hi! I'm ${this.firstName} ${this.lastName}`;
  }

  bio() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old. They like ${this.interests}.`;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age, gender, interests, subject) {
    super(firstName, lastName, age, gender, interests);
    this.subject = subject;
  }

  greeting() {
    let prefix;
    if (this.gender === 'male') {
      prefix = 'Mr.';
    } else if (this.gender === 'female') {
      prefix = 'Ms.';
    } else {
      prefix = 'Mx.';
    }
    return `Hello! My name is ${prefix} ${this.lastName}, and I teach ${this.subject}`;
  }
}

class Student extends Person {
  greeting() {
    return `Yo! I'm ${this.firstName}`;
  }
}
