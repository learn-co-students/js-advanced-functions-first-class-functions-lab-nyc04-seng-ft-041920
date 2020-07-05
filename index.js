// Code your solution in this file!

const returnFirstTwoDrivers = function(anon) {
    return anon.slice(0, 2)
}

const returnLastTwoDrivers = function(anon) {
    return anon.slice(-2)
}
    
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(num) {
    return function(fare) {
    return num * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arr, func) {
    return func(arr)
}
