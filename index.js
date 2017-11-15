// Code your solution in this file.
function lowerCaseDrivers(drivers){
  newDrivers= drivers.map(function(driver){
    return driver.toLowerCase();
  })
  return newDrivers;
}

function nameToAttributes(drivers){
 drivers.map(function(driver){
  let fName= driver.split(" ") [0];
  let lName= driver.split(" ") [1];
  return {firstName: fName, lastName: lName};
})
}

  function attributesToPhrase(drivers){
    newDr= drivers.map(function(driver){
      return `${driver.name} is from ${driver.hometown}`
});
return newDr;
  }
