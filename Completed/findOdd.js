function findOdd(A) {
    if(A.length === 1){
      return A[0];
    }else{
      for (let i = 0; i < A.length; i++) {
        let count = 0;
        for (let j = 0; j < A.length; j++) {
          if(A[i] === A[j])
          count++;
        }
        if(count%2 !== 0){
          return A[i]
        }
      }
    }
    return 0;
  }
  
  console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
  
  // const arr = [0,1,0,1,0];
  
  // for (let i = 0; i < arr.length; i++) {
  //   let count = 0;
  //   for (let j = 0; j < arr.length; j++) {
  //     if(arr[i] === arr[j])
  //     count++;
  //   }
  //   if(count%2 !== 0){
  //     console.log(arr[i]);
  //   }
  // }
  