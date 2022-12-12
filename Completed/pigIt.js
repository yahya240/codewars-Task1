
//Simple Pig Latin
function pigIt(str){
    let newStr = str.split(' ')
  
    let finalStr = newStr.map((item)=>{
      if(item !== '!' && item !== '?'){
        let oneStr = item.substring(1);
        item = `${oneStr}${item[0]}ay`;
        return item
      }
      return item
    })
  
    return finalStr.join(' ')
  }
  
  let str = 'uisQay ustodietcay psosiay ustodescay ?ay';
  let newStr = str.split(' ')
  
  let finalStr = newStr.map((item)=>{
    let oneStr = item.substring(1);
    item = `${oneStr}${item[0]}ay`;
    return item
  })
  console.log(finalStr.join(' '));
  console.log('uisQay ustodietcay psosiay ustodescay ?');
  
  // let oneStr = newStr[0].substring(1);
  // console.log(`${oneStr}${newStr[0][0]}ay`);