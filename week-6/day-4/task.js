"use strict";

class Student {
  constructor(name, age, dateofbirth, gender, id, hobbies) {
    this.name = name;
    this.age = age;
    this.dateofbirth = dateofbirth;
    this.gender = gender;
    this.id = id;
    this.hobbies = hobbies;
  }

  setName(newName) {
    this.name = newName;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  setDateOfBirth(newDateOfBirth) {
    this.dateofbirth = newDateOfBirth;
  }

  setGender(newGender) {
    if(newGender=="Male" || newGender=="Female") {
      this.gender = newGender;
    }
    else console.log(newGender + " is not a valid gender");
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  removeHobby(removedHobby) {
    for(var i=0;i<this.hobbies.length;i++) {
      if(this.hobbies[i]==removedHobby) {
        this.hobbies.splice(i,1);
      }
    }
  }

  getData() {
    return "Nama: " + this.name + ", Age: " + this.age + ", Date of Birth: " + this.dateofbirth + ", Gender: " + this.gender + ", Student ID: " + this.id + ", Hobbies: " + this.hobbies;
  }
}

let aing = new Student("Aing", 23, "290793", "Male", 1231151, ["yeye","yeye"]);

aing.addHobby("menjahit");
aing.removeHobby("yeye");
console.log(aing.getData());
