
function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq);
    if(Number.isInteger(sqrt)){
      return (sqrt+1)*(sqrt+1);
    }
    // Return the next square if sq is a perfect square, -1 otherwise
    return -1;
  }
  
  // 121 --> 144
  // 625 --> 676
  // 114 --> -1 since 114 is not a perfect square
  
  // console.log(Number.isInteger(Math.sqrt(121)));
  
  console.log(findNextSquare(114));