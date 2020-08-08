const numbers = [3, 4, 5, 7, 2, 12];

// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// ekti array theke elements ber korar jonno map use kora hoy,,, Map use korle ek sate sob elements select kora jay
// array te for loop er poriborte map use kora hoy

// const number = numbers.map(function(element) {
//     return element * element;
// });

//map selected all elemets from array
const number = numbers.map(x => x * x) // aro sohoj vabe map use korte cayle
console.log(number);

//filter selected specficific some elements from array depand on condition
const bigger = numbers.filter(x => x > 5);
console.log(bigger);

// find selected specific only one element from array depand on condition
const isThere = numbers.find(x => x > 5);
console.log(isThere);