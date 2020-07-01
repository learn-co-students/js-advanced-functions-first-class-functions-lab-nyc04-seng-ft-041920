// Code your solution in this file!
const returnFirstTwoDrivers = (arrDrivers)=>{
  return arrDrivers.slice(0,2)
}

const returnLastTwoDrivers = function (arrDrivers){
  return arrDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(fare){
    return num*fare
  }
}

// const fareDoubler = fare => fare*2
const fareDoubler = createFareMultiplier(2)

/* when called in console it returns inner function of createFareMultiplier
fareDoubler
ƒ (fare){
  return num*fare
}
*/
const fareTripler = fare => fare*3

const selectDifferentDrivers = (arrayOfDrivers, func) =>{
  return  func(arrayOfDrivers)
}