var faker = require("faker");
const db = require("./index.js");

let randomGender = function() {
  let number = Math.floor(Math.random() * 5) + 5;
  if (number % 2 === 0) {
    return "m";
  } else {
    return "f";
  }
};

var seedPatients = function() {
  let patients = [];
  for (i = 0; i < 50; i++) {
    patients.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: Math.floor(Math.random() * 51) + 15,
      sex: randomGender()
    });
  }

  db.insertManyPatients(patients, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("succesfully seeded");
      return;
    }
  });
};

var seedNurses = function() {
  let nurses = [];
  for (i = 0; i < 50; i++) {
    nurses.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    });
  }

  db.insertManyNurses(nurses, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("succesfully seeded");
      return;
    }
  });
};

var seedDoctors = function() {
  let doctors = [];
  for (i = 0; i < 50; i++) {
    doctors.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      areaId: Math.floor(Math.random() * 5) + 1
    });
  }
  //console.log(doctors);

  db.insertManyDoctors(doctors, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("succesfully seeded");
      return;
    }
  });
};

// seedPatients();
// seedDoctors();
// seedNurses();
