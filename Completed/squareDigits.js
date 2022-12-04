
function squareDigits(num){
    let num2 = num.toString()
    let arr = num2.split('')
  
    let newArr = arr.map((item)=>{
      return Number(item)*Number(item)
    })
  
    return Number(newArr.join(''));
  }
  
  console.log(squareDigits(9119));
  
  //9119 
  
  // let num = 9119
  // let num2 = num.toString()
  // let arr = num2.split('')
  
  // let newArr = arr1.map((item)=>{
  //   return Number(item)*Number(item)
  // })
  
  // console.log(Number(arr.join('')));
  
  // for(let i=0;i<3;i++){
  //   console.log(num2[i]);
  // }
  // console.log(num2.split(''));