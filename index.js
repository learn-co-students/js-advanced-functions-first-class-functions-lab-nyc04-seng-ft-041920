// Code your solution in this file!
const returnFirstTwoDrivers = function(arrDrivers) {
  return arrDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function(arrDrivers) {
  return arrDrivers.slice(arrDrivers.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(ride) {
  return function(fare) {
    return ride * fare
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrDrivers, givenFunction) {
  return givenFunction(arrDrivers)
}