
//Stop gninnipS My sdroW!

function spinWords(string){
    const newStr = string.split(' ')
    const newArray = newStr.map((item)=>{
      if(item.length>4){
        return item = item.split('').reverse().join("")
      }else{
        return item
      }
    })
    return newArray.join(' ');
  }
  
  
  const str = "Hey fellow warriors";
  const newStr = str.split(' ')
  console.log(newStr[2].length);
  const newArray = newStr.map((item)=>{
    if(item.length>4){
      return item = item.split('').reverse().join("")
    }else{
      return item
    }
  })
  console.log(newArray.join(' ') === "Hey wollef sroirraw");
  // let word = newStr[0].split('')
  console.log(newStr[0].split('').reverse().join(""));