// Code your solution in this file.
function lowerCaseDrivers(drivers){
  newDrivers= drivers.map(function(driver){
    return driver.toLowerCase();
  })
  return newDrivers;
}

  function attributesToPhrase(drivers){
    newDr= drivers.map(function(driver){
      return `<${driver.name}> is from <${driver.hometown}>`
});
return newDr;
  }
