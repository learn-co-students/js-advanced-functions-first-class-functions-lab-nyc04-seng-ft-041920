// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    let firstTwo = [];

    for (let i = 0; i < 2 ; i++){
        firstTwo.push(drivers[i]);
    }

    return firstTwo;
};

const returnLastTwoDrivers = function(drivers){
    let lastTwo = [];

    for (let i = 1; i < 3 ; i++){
        lastTwo.unshift(drivers[drivers.length - i]);
    }

    return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare){
        return fare * int
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selection){
    return selection(drivers)
}