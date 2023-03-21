// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  //returns the number of blocks given a value
  let blocks;
  if (value < 42) {
    blocks = 42 - value;
  } else {
    blocks = value - 42;
  }
  return blocks;
}

function distanceFromHqInFeet(value) {
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  const blockNumber = distanceFromHqInBlocks(value);
  return blockNumber * 264;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  if (start > destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let feet;
  if (start > destination) {
    feet = (start - destination) * 264;
  } else {
    feet = (destination - start) * 264;
  }
  if (feet < 400) {
    return 0;
  } else if (feet > 400 && feet < 2000) {
    return (feet - 400) * 0.02;
  } else if (feet > 2000 && feet < 2500) {
    return 25;
  }else{
    return 'cannot travel that far'
  }
}
