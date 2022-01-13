// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  return [arr[0], arr[1]]
}

const returnLastTwoDrivers = (arr) => {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  function fareMultiplier(fare) {
    return fare * int
  }

  return fareMultiplier
}

const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arr, func) {
  if (func === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arr)
  } else {
    return returnLastTwoDrivers(arr)
  }
}