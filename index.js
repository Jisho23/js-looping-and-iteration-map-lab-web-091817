// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function (driver) {return driver.toLowerCase()})
}

function nameToAttributes(drivers){
  return drivers.map( function (driver){
    const splitName = driver.split(' ');
    let dfirstName = splitName[0];
    let dlastName = splitName[1];
    return {firstName: dfirstName, lastName: dlastName};
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function (driverInfo){
    return `${driverInfo.name} is from ${driverInfo.hometown}`;
  })
}
