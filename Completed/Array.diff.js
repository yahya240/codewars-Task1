// Array.diff

function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item))
  }
  
  //arrayDiff([1,2,2,2,3],[2]) == [1,3]
  
  
  let arr = [1,2,2,2,3];
  let arr2 = [1,2]
  
  console.log(arr.filter(item => !arr2.includes(item)));
  
  // let newArr = []
  // for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr2.length; j++) {
  //         if(arr[i] !== arr2[j]){
  //             arr.push(arr[i])
  //         }
  //     }
      
  // }
  
  // console.log(newArr);
  
  // console.log(arr.filter((item) =>{
  //     for (let i = 0; i < arr2.length; i++) {
  //         if(item !== arr2[i]){
  //             return item
  //         }
  //     }
  // }));
  
  // console.log(arrayDiff([1,2,2,2,3], [2]));