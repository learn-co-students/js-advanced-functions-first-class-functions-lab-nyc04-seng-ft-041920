const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = (arr) => {
  return arr.slice(arr.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return (fare) => {
    return int * fare
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers)
}
