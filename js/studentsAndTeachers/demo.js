// Part I
//
// Given the following array of objects:

var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

// Create a program that outputs:
//
// Michael Jordan
// John Rosales
// Mark Guillen
// KB Tonel

for(var i = 0; i < students.length; i++){
  // console.log(students[i]);

  // console.log(`${students[i].first_name} ${students[i].last_name}`);
  // console.log(students[i].first_name, students[i].first_name);

  var rStr = "";

  for(var key in students[i]){
    // console.log(`the key is: ${key}`);
    rStr = rStr +  students[i][key];
    rStr += ' ';
  }

  rStr.trim();
  // console.log(rStr);

}


// Part II (Optional)
//
// Now, given the following dictionary:

var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }
// Create a program that prints  the following format (including the number of characters in each combined name):
//
// Students
// 1 - MICHAEL JORDAN - 13
// 2 - JOHN ROSALES - 11
// 3 - MARK GUILLEN - 11
// 4 - KB TONEL - 7
// Instructors
// 1 - MICHAEL CHOI - 11
// 2 - MARTIN PURYEAR - 13


for(var person in users){
  console.log(person);
  for(var i = 0; i < users[person].length; i++){
    console.log(`${i + 1} - ${users[person][i].first_name} ${users[person][i].last_name} - ${users[person][i].first_name.length + users[person][i].last_name.length}`);
    console.log((i + 1) + " -  " + (users[person][i].first_name) + " " + (users[person][i].last_name) + " - " + (users[person][i].first_name.length + users[person][i].last_name.length));

    // console.log(`${students[i].first_name} ${students[i].last_name}`);
    // console.log(students[i].first_name, students[i].first_name);

  }
}
