function solution(number){
    let num = number;
    let sum = 0;
  
    for(let i=num-1;i>0;i--){
      if(i%3 === 0){
        console.log(i);
        sum+=i;
      }else if(i%5 === 0){
        sum+=i;
        console.log(i);
      }
    }
    return sum;
  }
  
  //3, 5, 6 and 9. The sum of these multiples is 23.
  
  let num = 10;
  let sum = 0;
  
  for(let i=num-1;i>0;i--){
    if(i%3 === 0){
      console.log(i);
      sum+=i;
    }else if(i%5 === 0){
      sum+=i;
      console.log(i);
    }
  }
  
  console.log(sum);