function getCount(str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      if(str[i].includes('a') || str[i].includes('e') || str[i].includes('i') || str[i].includes('o') || str[i].includes('u')){
        total++;
      }
    }
    return total;
  }
  
  let str = 'yahyaeraha';
  let total = 0;
  
  for (let i = 0; i < str.length; i++) {
    if(str[i].includes('a') || str[i].includes('e') || str[i].includes('i') || str[i].includes('o') || str[i].includes('u')){
      total++;
    }
  }
  
  console.log(total);
  
  // str.map((item)=>{
  //   console.log(item);
  // })