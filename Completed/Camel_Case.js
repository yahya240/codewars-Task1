// console.log('hello yahya');

// const str = "the-stealth-warrior";
// let strArray = str.split('-');

//   let totalArray = [...strArray[0]]
//   strArray.forEach((item,index)=>{
//     if(index > 0 ){
//         let newItem = [...item]
//         newItem[0] = newItem[0].toUpperCase()
//         totalArray.push(...newItem)
//     }
//     console.log(totalArray);
//   })

//   const result = totalArray.join('')
//   console.log(result);

function toCamelCase(str){
    let strArray;
    if(str.includes('_')){
        strArray = str.split('_')
    }else{
        strArray = str.split('-')
    };
    // let strArray = str.split('-') || str.split('_');

  let totalArray = [...strArray[0]]
  strArray.forEach((item,index)=>{
    if(index > 0 ){
        let newItem = [...item]
        newItem[0] = newItem[0].toUpperCase()
        totalArray.push(...newItem)
    }
  })

  const result = totalArray.join('')
  return result
  }

  console.log(toCamelCase('APippiWas-Savage') === 'APippiWasSavage');



//   function toCamelCase(str){
//     let strArray;
// if(str.includes('_')){
//     strArray = str.split('_')
// }else{
//     strArray = str.split('-')
// };

// let totalArray = [...strArray[0]]
// strArray.forEach((item,index)=>{
// if(index > 0 ){
//     let newItem = [...item]
//     newItem[0] = newItem[0].toUpperCase()
//     totalArray.push(...newItem)
// }
// })

// const result = totalArray.join('')
// return result
// }


//the solution that worked+++

// str = str.split('');
//   return str.map(function(el, i){
//     if(el == '-' || el == '_'){
//       el = str[i+1].toUpperCase();
//       str.splice(i+1, 1);
//     }
//     return el;
//   }).join('');