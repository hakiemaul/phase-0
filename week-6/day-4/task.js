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
    console.log("Nama: " + this.name);
    console.log("Age: " + this.age);
    console.log("Date of Birth: " + this.dateofbirth);
    console.log("Gender: " + this.gender);
    console.log("Student ID: " + this.id);
    console.log("Hobbies: " + this.hobbies);
  }
}

let aing = new Student("Aulia", 23, "290793", "Female", 1231151, ["yeye","melukis","yeye"]);

aing.addHobby("menjahit");
aing.removeHobby("yeye");
aing.setGender("Male");
aing.setAge(24);
aing.getData();
