function XO(str) {
    let strArray = str.split('')
    let theX = 0;
    let theO = 0;
     strArray.map((item)=>{
      if(item === 'x' || item === 'X'){
        theX++;
      }else if(item === 'o' || item === 'O'){
        theO++;
      }
      return
    })
    return theX === theO
    }
    
    let str = "ooxXm"
    
    let strArray = str.split('')
    let theX = 0;
    let theO = 0;
     strArray.map((item)=>{
      if(item === 'x' || item === 'X'){
        theX++;
      }else if(item === 'o' || item === 'O'){
        theO++;
      }
      return
    })
    
    // console.log(`x = ${theX} o = ${theO}`);
    
    console.log(XO("zzoo"));