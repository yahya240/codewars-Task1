//Moving Zeros To The End
function moveZeros(arr) {
    let newArr = [];
    let zeros = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== 0){
        newArr.push(arr[i])
      }else{
        zeros++;
      }
    }
  
    for (let j = 0; j < zeros; j++) {
      newArr.push(0)
    }
    return newArr;
  }
  
  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
  
  
  // function moveZeros(arr) {
  //   let newArr = arr
  //   for (let i = 0; i < newArr.length; i++) {
  //     if(arr[i] === 0){
  //       newArr.splice(i,1)
  //       newArr.push(0)
  //     }
  //   }
  //   return newArr;
  // }
  
  // console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ]));
  
  // let arr = [false,1,0,1,2,0,1,3,"a"];
  
  // for (let i = 0; i < arr.length; i++) {
  //   if(arr[i] === 0){
  //     arr.splice(i,1)
  //     arr.push(0)
  //   }
  //   console.log(arr);
  // }
  
  // console.log(arr);