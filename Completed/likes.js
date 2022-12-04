
function likes(names) {
    if(names.length === 0){
      return "no one likes this"
    }else if(names.length === 1) {
      return `${names[0]} likes this`
    }else if(names.length === 2) {
      return `${names[0]} and ${names[1]} like this`
    }else if(names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  }
  
  const names2 = ["Alex", "Jacob"];
  console.log(likes(names2));
  
  // []                                -->  "no one likes this"
  // ["Peter"]                         -->  "Peter likes this"
  // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
  // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
  // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
  
  // const arr = ["Alex", "Jacob", "Mark", "Max"];
  
  // if(arr.length === 0){
  //   return "no one likes this"
  // }else if(arr.length === 1) {
  //   return `${arr[0]} likes this`
  // }else if(arr.length === 2) {
  //   return `${arr[0]} and ${arr[1]} like this`
  // }else if(arr.length === 3) {
  //   return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
  // }else{
  //   return `${arr[0]}, ${arr[1]} and ${arr.length-2} others like this`
  // }