// //Human readable duration format

function formatDuration (seconds) {
    let target = seconds
  
    let years = 31536000
    let days = 86400
    let hours = 3600
    let minutes = 60
  
    let targetYears = 0;
    let targetDays = 0;
    let targetHourse = 0;
    let targetMinutes = 0;
  
    while(target>=years){
      target = target - years;
      targetYears++;
    }
    while(target>=days){
      target = target - days;
      targetDays++;
    }
    while(target>=hours){
      target = target - hours;
      targetHourse++;
    }
    while(target>=minutes){
      target = target - minutes;
      targetMinutes++;
    }
  
    if(seconds === 0){
      return 'now'
    }else if(targetYears>0 && targetDays>0 && targetHourse>0 && targetMinutes >0 && target>0){
      return `${targetYears} ${targetYears===1? 'year' : 'years'}, ${targetDays} days, ${targetHourse} ${targetHourse===1? 'hour' : 'hours'}, ${targetMinutes} ${targetMinutes===1? 'minute' : 'minutes'} and ${target} ${target===1?'second':'seconds'}`
    }else if(targetYears>0 && targetDays>0 && targetHourse>0 && targetMinutes >0){
      return `${targetYears} years, ${targetDays} days, ${targetHourse} ${targetHourse===1? 'hour' : 'hours'} and ${targetMinutes} ${targetMinutes===1? 'minute' : 'minutes'}`
    }else if(targetDays>0 && targetHourse>0 && targetMinutes >0 && target>0){
      return `${targetDays} days, ${targetHourse} ${targetHourse===1? 'hour' : 'hours'}, ${targetMinutes} ${targetMinutes===1? 'minute' : 'minutes'} and ${target} ${target===1?'second':'seconds'}`
    }else if(targetDays>0 && targetHourse>0 && targetMinutes >0){
      return `${targetDays} days, ${targetHourse} ${targetHourse===1? 'hour' : 'hours'} and ${targetMinutes} ${targetMinutes===1? 'minute' : 'minutes'}`
    }else if(targetDays>0 && targetMinutes >0 && target>0){
      return `${targetDays} days, ${targetMinutes} ${targetMinutes===1? 'minute' : 'minutes'} and ${target} ${target===1?'second':'seconds'}`
    }else if(targetHourse>0 && targetMinutes >0 && target>0){
      return `${targetHourse} hour, ${targetMinutes} minute and ${target} ${target===1?'second':'seconds'}`
    }else if(targetMinutes >0 && target>0){
      return `${targetMinutes} minute and ${target} ${target===1?'second':'seconds'}`
    }else if(targetHourse>0){
      return `${targetHourse} hour`
    }else if(targetMinutes >0 ){
      return `${targetMinutes} minutes`
    }else if(target<60){
      return `${target} ${target===1?'second':'seconds'}`
    }else{
      return 'now'
    }
  }
  
  console.log(formatDuration(1011960));
  console.log('11 days, 17 hours and 6 minutes');
  console.log('69 days, 15 minutes and 16 seconds');
  console.log('1 year, 19 days, 18 hours, 19 minutes and 46 seconds');
  console.log('4 years, 68 days, 3 hours and 4 minutes');
  console.log('21 days, 18 hours, 58 minutes and 1 second');
  console.log('182 days, 1 hour, 44 minutes and 40 seconds');
  console.log('10 days, 1 hour, 16 minutes and 57 seconds');
  console.log('98 days, 7 hours, 50 minutes and 13 seconds');
  console.log('182 days, 1 hour, 44 minutes and 40 seconds');
  
  // let target = 3662
  
  // let hours = 3600
  // let minutes = 60
  
  // let targetHourse = 0;
  // let targetMinutes = 0;
  
  // while(target>hours){
  //   target = target - hours;
  //   targetHourse++;
  // }
  // while(target>minutes){
  //   target = target - minutes;
  //   targetMinutes++;
  // }
  
  // console.log(targetHourse);
  // console.log(targetMinutes);
  // console.log(target);
  
  // console.log(new Date(3662));