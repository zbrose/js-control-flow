const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];
let result = false

if (arr1.length === arr2.length){
  for (let i = 0; i < arr1.length; i++){
    result = arr2.indexOf(arr1[i]) !== -1
    if (result === false){
      break
    }
  }
}
console.log(result)