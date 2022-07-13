// console.log('Fear is the mind killer.');

// =========================
// ANCHOR - arr.map() Method Overview & Practice:
// =========================

// NOTE: The arr.map() method creates a !NEW! array populated with result of calling a provided function on every element in the calling array:

const array1 = [1, 28, 7, 29];

// NOTE: returns a new array where numerical values from array1 have all be doubled:
let map1 = array1.map(x => x * 2);
// console.log(map1);

// Part 1: Reformatting array of objects:
const kvArray = [
  {
    key: 1,
    value: 10,
  },
  {
    key: 23,
    value: 3,
  },
  {
    key: 100,
    value: 74,
  },
  {
    key: 49,
    value: 1,
  }
];

const reformattedArray = kvArray.map(({ key, value}) => ({[key]:  value}));

// console.log(reformattedArray);

// Part 2: 

const randoNums = [1, 7, 28, 88, 83];

console.log(randoNums.map((element, index, arr) => {
  console.log(element);
  console.log(index);
  console.log(arr);
}))