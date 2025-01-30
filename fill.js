var array=[2,3,4,7,8,6,1,9]
console.log(array.fill(0))
//starts at 2
console.log(array.fill("m",2))
// starts at 2 and ends at 5
console.log(array.fill("h",2,5))
//output
// [
//   0, 0, 0, 0,
//   0, 0, 0, 0
// ]

// [
//   0,   0,   'm', 'm',
//   'm', 'm', 'm', 'm'
// ]

// [
//   0,   0,   'h', 'h',
//   'h', 'm', 'm', 'm'
// ]
