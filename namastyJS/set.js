//sets
//sets are collection of unique values
//sets do not allow duplicate values

const arr = [1,2,3,4,4,5,5,6,7,7,8]
const uniqueArr = new Set(arr)
console.log(uniqueArr)

//maps
const map = new Map()
map.set('name', 'shashank')
map.set('age', 24)
map.set('city', 'pune')
console.log(map)
const uniqueObj = new Set(obj)
console.log(uniqueObj)
const uniqueObj2 = new Set(obj)
console.log(uniqueObj2)
const uniqueObj3 = new Set(obj)
console.log(uniqueObj3)

//weaksets
//weaksets are collection of objects only
//weaksets do not allow duplicate objects
//weaksets are not iterable

const weakset = new WeakSet()
let obj1 = {name: 'shashank'}
let obj2 = {age: 24}
weakset.add(obj1)
weakset.add(obj2)
console.log(weakset)
const uniqueObj4 = new Set(obj)
console.log(uniqueObj4)
const uniqueObj5 = new Set(obj)
console.log(uniqueObj5)
const uniqueObj6 = new Set(obj)
console.log(uniqueObj6)
const uniqueObj7 = new Set(obj)
console.log(uniqueObj7)
const uniqueObj8 = new Set(obj)
console.log(uniqueObj8)
const uniqueObj9 = new Set(obj)
console.log(uniqueObj9)
const uniqueObj10 = new Set(obj)
console.log(uniqueObj10)
weakset.add(obj1) //duplicate object will not be added
console.log(weakset)
const uniqueObj11 = new Set(obj)
console.log(uniqueObj11)

//removeDuplicate values without using sets
function removeDuplicates(arr) {
    let uniqueArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}
console.log(removeDuplicates([1,2,3,4,4,5,5,6,7,7,8]))

//easy way to remove duplicate values using sets
function removeDuplicatesUsingSet(arr) {
    return [...new Set(arr)]
}
console.log(removeDuplicatesUsingSet([1,2,3,4,4,5,5,6,7,7,8]))