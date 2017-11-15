// Code your solution in this file.
function lowerCaseDrivers(drivers){
  newDrivers= drivers.map(function(driver){
    return driver.toLowerCase();
  })
  return newDrivers;
}

function nameToAttributes(drivers){
  newD{}= drivers.map(function(driver){
    for(const char of driver){
      let str=0;
      if (char=""){
        return false;
      } else {
      let firstName=driver.slice(0,str)
      str++;
    }

  })
}

  function attributesToPhrase(drivers){
    newDr= drivers.map(function(driver){
      return `${driver.name} is from ${driver.hometown}`
});
return newDr;
  }
