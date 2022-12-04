
function digitalRoot(n) {
    if(n === 0){
      return n;
    }else{
      let num = n
    while(num>9){
      let str = num.toString()
      let arr =str.split('')
      let total = 0;
  
      for (let i = 0; i < arr.length; i++) {
        total+=Number(arr[i])
      }
      if(total<=9){
        return total
      }
      num = total
    }
    }
  }
  
  
  digitalRoot(942)
  
  // //942
  // let num = 942
  
  // let str = num.toString()
  // let arr =str.split('')
  // let total = 0;
  
  // for (let i = 0; i < arr.length; i++) {
  //   total+=Number(arr[i])
  // }
  // console.log(total);
  
  //*********************************** */
  
  // let num = 493193
  // while(num>9){
    
  // let str = num.toString()
  // let arr =str.split('')
  // let total = 0;
  
  // for (let i = 0; i < arr.length; i++) {
  //   total+=Number(arr[i])
  // }
  // console.log(total);
  // num = total
  // }
  