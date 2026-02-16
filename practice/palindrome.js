// // function isPalindrome(str) {
// //         let j = str.length - 1
// //         for (let i = 0; i < str.length / 2; i++) {
// //             if (str[i] != str[j]) {
// //                 return str + " is not a palindrome";
// //             }
// //             j--;
// //         }
// //         return str + " is ax palindrome";
// //     }
    
// //     let str1 = "racecar";
// //     let str2 = "nitin";
// //     let str3 = "Rama";
    
// //     console.log(isPalindrome(str1));
// //     console.log(isPalindrome(str2));
// //     console.log(isPalindrome(str3));

// function isPalindrome (str){
//         if (typeof str === "number") {
//                 str = str.toString();
//             }
//         let j = str.length - 1;
//         for (let i = 0; i<str.length/2; i++){
//                 if (str[i] !== str[j]){
//                         return str + " is not a palindrome";
//                 }
//                 j--;
//         }
//         return str + " is a palindrome";
// }

// const str1 = 121;
// const str2 = 1121;

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));        


const myPromise = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Data received ✅");
  } else {
    reject("Error occurred ❌");
  }

});
myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });   
// console.log("Hello");
