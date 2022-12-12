//Human Readable Time
function humanReadable (seconds) {
    let target = seconds
  
    let hours = 3600
    let minutes = 60
  
  
    let targetHourse = 0;
    let targetMinutes = 0;
  
    while(target>=hours){
      target = target - hours;
      targetHourse++;
    }
    while(target>=minutes){
      target = target - minutes;
      targetMinutes++;
    }
  
    return `${targetHourse>9?targetHourse:'0'+targetHourse}:${targetMinutes>9?targetMinutes:'0'+targetMinutes}:${target>9?target:'0'+target}`
  }
  
  console.log(humanReadable(86400));
  
  // let target = 45296
    
  
  //     let hours = 3600
  //     let minutes = 60
    
  
  //     let targetHourse = 0;
  //     let targetMinutes = 0;
  
  //     while(target>=hours){
  //       target = target - hours;
  //       targetHourse++;
  //     }
  //     while(target>=minutes){
  //       target = target - minutes;
  //       targetMinutes++;
  //     }
  
  //     console.log(targetHourse);
  //     console.log(targetMinutes);
  //     console.log(target);