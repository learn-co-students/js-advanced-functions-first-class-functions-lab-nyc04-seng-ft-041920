const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return integer * fare
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arr, func) {
    return func(arr)
}