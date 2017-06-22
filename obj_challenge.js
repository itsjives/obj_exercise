// 1) find the sum of all the values
//
// [9:07]
// 2) push all the values into a new array
//
// [9:08]
// 3) subtract the odd numbers from the even numbers
//
// [9:08]
// 4) Multiply all the values by 2


var numbers = {
  10: 10,
  num: 13,
  anotherKey: 34,
  undefined: 12,
  blue: 98
}

var sum = 0
var odd = 0
var even = 0
var oddevenvalue = 0
var newArr = []
var multby2 = 0

  for ( var key in numbers){
      sum += numbers[key];
      newArr.push(numbers[key]);
      if(numbers[key] % 2 === 0){
        even += (numbers[key]);
      } else {
        odd += (numbers[key]);
      }
      oddevenvalue = (even - odd);
      multby2 = (numbers[key]*2);
      (numbers[key]) = (numbers[key]* 2);
}
console.log(sum)
// console.log(newArr)
// console.log(oddevenvalue)
// console.log(multby2)
// console.log(numbers)
