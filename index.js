// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    return drivers.map(d => d.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(function(d){
    nameArray = d.split(" ")

    nameObject = {firstName: nameArray[0], lastName = nameArray[1]}
  })
}
