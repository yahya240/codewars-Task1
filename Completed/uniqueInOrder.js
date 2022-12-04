var uniqueInOrder=function(iterable){
    if(typeof iterable === 'string'){
      var str2 = iterable.split('')
    }else{
      var str2 = iterable;
    }
  
    let str3 = [];
  
    for (let i = 0; i < str2.length; i++) {
      if(i === 0){
        str3.push(str2[i])
      }else if(str2[i] !== str2[i-1]){
        str3.push(str2[i])
      }
    }
  
    return str3;
  }
  
  console.log(uniqueInOrder('ABBCcAD'));
  
  
  // const str ='AAAABBBCCDAABBB';
  // if(typeof str === 'string'){
  //   var str2 = str.split('')
  // }else{
  //   var str2 = str;
  // }
  
  // let str3 = [];
  
  // for (let i = 0; i < str2.length; i++) {
  //   if(i === 0){
  //     str3.push(str2[i])
  //   }else if(str2[i] !== str2[i-1]){
  //     str3.push(str2[i])
  //   }
  // }
  
  // console.log(str3);