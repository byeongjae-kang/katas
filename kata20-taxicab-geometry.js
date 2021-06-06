const blocksAway = function(directions) {
  const finalDestination = {east: 0, north: 0};
  let directionInDegree = '';

  for (let direction of directions) {
    if (directionInDegree === '' && direction === 'right') {
      directionInDegree = 0;
    } else if (directionInDegree === '' && direction === 'left') {
      directionInDegree = 90;
    } else if (direction === 'right') {
      directionInDegree -= 90;
    } else if (direction === 'left') {
      directionInDegree += 90;
    }
    if (directionInDegree === 0 && typeof(direction) === 'number') {
      finalDestination.east += direction;
    } else if (Math.abs(directionInDegree) === 180 && typeof(direction) === 'number') {
      finalDestination.east -= direction;
    } else if ((directionInDegree === 90 || directionInDegree === -270) && typeof(direction) === 'number') {
      finalDestination.north += direction;
    }  else if ((directionInDegree === 270 || directionInDegree === -90) && typeof(direction) === 'number') {
      finalDestination.north -= direction;
    }
  }
  return finalDestination;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
