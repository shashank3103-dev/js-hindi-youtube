// // const items = ["apple", "banana", "apple" , "banana", "graphes"]
// // let count ={}
// // for(let i = 0; i < items.length; i++){
// //     let item = items[i];
// //     if(count[item]){
// //         count[item] = count[item] + 1;
// //     }else{
// //         count[item] = 1;
// //     }

// // console.log(count)


// // const arr = [1,2,3,4,5];
// // let pair = []
// // let index = 0
// // const target = 6
// // for(let i = 0; i<arr.length; i++){
// //   for(let j = i+1; j<arr.length; j++){
// //     if(arr[i] + arr[j] === target){
// //       pair[index] = [arr[i], arr[j]]
// //       index++
// //     }
// //   }
// // }
// // console.log(pair)

// // const arr = [1,1,2,2,3,4,5,6,7]

// // const unique = [...new Set(arr)]
// // console.log(unique)

// // const arr = [0,1,0,1,0,1,0,1,0,1]

// // for(let i = 0; i<arr.length; i++){
// //   for(let j= i+1; j< arr.length; j++){
// //     if(arr[i] > arr[j]){
// //       let temp = arr[i]
// //       arr[i] = arr[j]
// //       arr[j] = temp
// //     }
// //   }
// // }
// // console.log(arr)

// // const arr = [1,2,3,4,5,6,7,7,4]
// // let max = arr[0]
// // let secondMax = arr[0]
// // for(let i =0; i<arr.length; i++){
// //   if(arr[i]>max){
// //   max = arr[i]
// //   }else{
// //     arr[i] < max && arr[i] > secondMax
// //     secondMax = arr[i]
// //   }
// // }
// // console.log(secondMax)
// // console.log(max)

// // let fact = 1;
// // for(let i = 1; i<=5; i++){
// //   fact = fact * i
// // }
// // console.log(fact)


// // const arr= [1,2,3,4,5,6]
// // let even = []
// // let odd = []
// // let indexE=0
// // let indexO =0
// // for(let i = 0; i<arr.length; i++){
// //   if(arr[i]%2 === 0){
// //   even[indexE] = arr[i]
// //   indexE++
// //   }else{
// //   odd[indexO] = arr[i]
// //   indexO++
// //   }
  
// // }
// // console.log(odd)
// // console.log(even)



// const arr = [1, [2, [3, 4]], 5,[6]];
// let result = []
// let index = 0;
// function paArray(array){
//   for(let i = 0; i<array.length; i++){
//     let a = array[i]
//     if(Array.isArray(a)){
//       flattenArray(a)
//     }else{
//       result[index] = a
//       index++
//     }
//   }
// }
// flattenArray(arr)
// console.log(result)

// //check string or number
// // const arr = ["a",1,"b",2,"c",3]

// // let index = 0
// // let string = []
// // let number = []
// // for(let i= 0; i<arr.length; i++){
// //   if(typeof arr[i] === "number"){
// //     string[index] = arr[i]
// //     index++
// //   }else{
// //     number[index] = arr[i]
// //   }
// // }
// // console.log(string)
// // console.log(number)

// const obj = {
//   name: "Shashank",
//   greet() {

//     function inner() {
//       console.log(this.name);
//     }
//     inner();
//   }
// };

// obj.greet();

//find missing number in array
// const arr = [1,2,3,5]
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//   sum = sum + arr[i]
// }
// console.log(sum)

// const n = 5
// let totalSum = (n*(n+1))/2
// console.log(totalSum - sum)

//remove duplicates from array without using set
// const arr = [1,2,3,4,5,1,2,3]
// let unique = []
// let index = 0
// for(let i = 0; i<arr.length; i++){
//   if(unique.indexOf(arr[i]) === -1){
//     unique[index] = arr[i]
//     index++
//   }
// }
// console.log(unique)

// function firstNonRepeating(str) {

//   let count = {};

//   // Step 1: Count frequency
//   for (let i = 0; i < str.length; i++) {

//     let char = str[i];

//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//   }

//   // Step 2: Find first with count 1
//   for (let i = 0; i < str.length; i++) {

//     if (count[str[i]] === 1) {
//       return str[i];
//     }

//   }

//   return null;
// }

// console.log(firstNonRepeating("shashank")); // 

const arr = ["apple", "apple", "banana", "banana", "cat"];

function arrayObject(arr){
  let count = {}
  for(let i = 0; i<arr.length; i++){
    let j = arr[i]
    if(count[j]){
      count[j]++
    }else{
      count[j] = 1;
    }
  }
  return count;
  
}
const result = Object.entries(count).map(([key, value])=> ({[key]:value}))
console.log(result)
console.log(arrayObject(arr))

