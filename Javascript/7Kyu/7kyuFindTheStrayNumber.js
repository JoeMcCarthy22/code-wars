/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */

/*
P: odd-length array of integers
R: the unique number in the array
E: as above
Ps:
Sort the array
if statement to check the first or last digit is the odd one out
return that digit

*/

function stray(numbers) {
    numbers.sort((a, b) => a - b)
    
    if (numbers[0] !== numbers[1]){
      return numbers[0]
    } else {
      return numbers[numbers.length-1]
    }
  }