let arr = [1, 5, 6, 2, 5, 4, 10];
let min = arr[1];
let max = arr[1];

for (let i = 0; i < arr.length; i++) {
   if (max < arr[i]) {
      max = arr[i];
   }
   if (min > arr[i]) {
      min = arr[i];
   }
}
document.write([min, max]);
