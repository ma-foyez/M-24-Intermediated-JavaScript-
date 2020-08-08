function stopWatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const clock1 = stopWatch();
const clock2 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock1());
console.log(clock2());

function doSomething(x, y = 4) {
    console.log(y);
}
doSomething(3, 2);