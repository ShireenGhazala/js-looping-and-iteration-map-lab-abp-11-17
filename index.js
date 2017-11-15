// Code your solution in this file.
function lowerCaseDrivers(drivers){
  newDrivers= drivers.map(function(driver){
    return driver.toLowerCase();
  })
  return newDrivers;
}

function nameToAttributes(drivers){
 drivers.map(function(name){
  let fName= name.split(" ") [0];
  let lName= name.split(" ") [1];
  return {firstName:fName, lastName:lName}
})
}

  function attributesToPhrase(drivers){
    newDr= drivers.map(function(driver){
      return `${driver.name} is from ${driver.hometown}`
});
return newDr;
  }
