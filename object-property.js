const students = [
    { id: 1, name: "fayez" }, { id: 2, name: "riyad" }, { id: 3, name: "morshed" }, { id: 4, name: "sakib" }, { id: 5, name: "arafat" }, { id: 6, name: "shahed" }
];
// const studentsName = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const name = element.name
//     studentsName.push(name);
// }

// this condition use with map keywords
const stuName = students.map(name => name.name);
const stuId = students.map(name => name.id);
console.log(stuName);
console.log(stuId);