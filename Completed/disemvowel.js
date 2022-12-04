// function disemvowel(str) {
//   let str2 = str;
//   let newStr = '';
//   if(str.includes('i')){
//     newStr = str2.replaceAll('i','');
//   }
//   if(str.includes('a')){
//     newStr = newStr.replaceAll('a','');
//   }
//   if(str.includes('e')){
//     newStr = newStr.replaceAll('e','');
//   }
//   if(str.includes('o')){
//     newStr = newStr.replaceAll('o','');
//   }
//   if(str.includes('u')){
//     newStr = newStr.replaceAll('u','');
//   }

//   return newStr;
// }

// function disemvowel(str) {
//   let str2 = str;
//   let newStr = '';
//   if(str.includes('i')){
//     newStr = str2.replace('i','');
//   }
//   if(str.includes('a')){
//     newStr = newStr.replace('a','');
//   }
//   if(str.includes('e')){
//     newStr = newStr.replace('e','');
//   }
//   if(str.includes('o')){
//     newStr = newStr.replace('o','');
//   }
//   if(str.includes('u')){
//     newStr = newStr.replace('u','');
//   }

//   return newStr;
// }
let str =  "This website is for losers LOL!"
// console.log(disemvowel(str));
// console.log("N ffns bt,Yr wrtng s mng th wrst 'v vr rd");
  let = letters = []
  let str2 = str.split(' ');
  console.log(str2);
  // let newStr = ''
  let newArray = []
  for (let i = 0; i < str2.length; i++) {
    let newStr = str2[i];
    while(newStr.includes('i')){
      newStr = newStr.replace('i','');
    }
    while(newStr.includes('a')){
      newStr = newStr.replace('a','');
    }
    while(newStr.includes('e')){
      newStr = newStr.replace('e','');
    }
    while(newStr.includes('o')){
      newStr = newStr.replace('o','');
    }
    while(newStr.includes('u')){
      newStr = newStr.replace('u','');
    }
    while(newStr.includes('I')){
      newStr = newStr.replace('I','');
    }
    while(newStr.includes('A')){
      newStr = newStr.replace('A','');
    }
    while(newStr.includes('E')){
      newStr = newStr.replace('E','');
    }
    while(newStr.includes('E')){
      newStr = newStr.replace('E','');
    }
    while(newStr.includes('U')){
      newStr = newStr.replace('U','');
    }
    while(newStr.includes('O')){
      newStr = newStr.replace('O','');
    }
    newArray.push(newStr)
  }

  console.log(newArray.join(' '));
  console.log("Ths wbst s fr lsrs LL!");


  // let newStr = '';
  // if(str.includes('i')){
  //   newStr = str2.replace('i','');
  // }
  // if(str.includes('a')){
  //   newStr = newStr.replace('a','');
  // }
  // if(str.includes('e')){
  //   newStr = newStr.replace('e','');
  // }
  // if(str.includes('o')){
  //   newStr = newStr.replace('o','');
  // }
  // if(str.includes('u')){
  //   newStr = newStr.replace('u','');
  // }



// let str =  "This website is for losers LOL!";
// let newStr = '';
// if(str.includes('i')){
//   newStr = str.replaceAll('i','');
// }
// if(str.includes('a')){
//   newStr = newStr.replaceAll('a','');
// }
// if(str.includes('e')){
//   newStr = newStr.replaceAll('e','');
// }
// if(str.includes('o')){
//   newStr = newStr.replaceAll('o','');
// }
// if(str.includes('u')){
//   newStr = newStr.replaceAll('u','');
// }

// console.log(newStr);