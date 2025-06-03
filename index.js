// Code your solution in this file!
// Function 1: Distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  const hq = 42;
  return Math.abs(someValue - hq);
}

// Function 2: Distance from HQ in feet
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// Function 3: Distance travelled in feet between any two points
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function 4: Fare price calculation based on distance travelled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
