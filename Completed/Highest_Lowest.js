// Highest and Lowest

function highAndLow(numbers){
    let arr = numbers.split(' ')
    let newArr = arr.map((item)=>{
        return Number(item)
    })
    return `${Math.max(...newArr)} ${Math.min(...newArr)}`
  }


//   console.log(highAndLow("1 2 3 4 5"));

let numbers = "1 2 -3 4 5";
let arr = numbers.split(' ')
let newArr = arr.map((item)=>{
    return Number(item)
})
console.log(newArr);
console.log(`${Math.max(...newArr)} ${Math.min(...newArr)}`);
