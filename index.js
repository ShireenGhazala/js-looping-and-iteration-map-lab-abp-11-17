// Code your solution in this file.
function lowerCaseDrivers(drivers){
  newDrivers= drivers.map(function(driver){
    return driver.toLowerCase();
  })
  return newDrivers;
}

  function attributesToPhrase(drivers){
    newDr= drivers.map(function(driver){
      let uName= (driver.name).toUpperCase();
      let uHometown= (driver.hometown).toUpperCase();
      return `<${uName}> is from <${uHometown}> `
});
return newDr;
  }
