function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  }
  
  //createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(createPhoneNumber(arr));
  // for(let i=0;i<arr.length;i++){
  //   console.log(arr[i]);
  // }