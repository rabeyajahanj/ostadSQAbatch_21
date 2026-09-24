function sumArray(arr) {
let total = 0;
for (let i = 0; i < arr.length; i++) {
total += arr[i];
}
return total;
}
let numbers = [1, 2, 3, 4, 5];
console.log("Sum:", sumArray(numbers));