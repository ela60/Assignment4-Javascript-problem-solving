function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    let total = waitingTimes.reduce((acc, time) => acc + time, 0);
    let averageTime = Math.round(total / waitingTimes.length);
    let peopleAhead = serialNumber - waitingTimes.length - 1;
    let isratWatingTime = peopleAhead * averageTime;
    return isratWatingTime;

}





// Test the function with some sample inputs
console.log(waitingTime([3, 5, 7, 11, 6], 10)); // Output: 24
console.log(waitingTime([13, 2,3,5], 6));           // Output: 24
console.log(waitingTime([13, 2, 6, 7, 10], 12)); // Output: 0
console.log(waitingTime([6], 4));               // Output: 12
console.log(waitingTime(7, 10));                // Output: "Invalid Input"
console.log(waitingTime("[6,2]", 9));           // Output: "Invalid Input"
console.log(waitingTime([7, 8, 3, 4, 5], "9")); // Output: "Invalid Input"
