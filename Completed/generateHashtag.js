//The Hashtag Generator

function generateHashtag (str) {

    let newArr = str.split(' ').filter(item => item.length>0)
    console.log(newArr[0].length);
    for (let i = 0; i < newArr.length; i++) {
      if(newArr[i].length >= 140 ){
        return false
      }
    }
    let myNewArr = newArr.map((item)=>{
      let itemArr = item.split('')
      itemArr[0] = itemArr[0].toUpperCase();
      return itemArr.join('');
    });
  
    if(newArr.length === 0){
      return false
    }
    console.log(`#${myNewArr.join('')}`);
    return `#${myNewArr.join('')}`
  }
  
  let str = " Do We have A Hashtag ";
  let str2 = "    Hello     World   ";
  let str3 = 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' ;
  
  
  console.log(generateHashtag(str3));
  // console.log('#DoWeHaveAHashtag');
  // console.log('#DoWehaveAHashtag');
  
  // let newStr2 = str.split(' ')
  // let newArr = newStr2.filter(item => item.length>0)
  // console.log(newArr.map((item)=>{
  //   let itemArr = item.split('')
  //   // console.log(itemArr);
  //   itemArr[0] = itemArr[0].toUpperCase();
  //   return itemArr.join('');
  // }));
  // console.log(`#${newArr.join('')}`);
  