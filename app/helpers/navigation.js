import { direction } from '../constants/directions.js';

export function navigate(instructions, position, grid) {
  let compassPoint = position[2];
  for (let i = 0; i < instructions.length; i += 1) {
    // turn left
    if (instructions[i] === 'L') {
      compassPoint = turnLeft(compassPoint);
    } else if (instructions[i] === 'R') {
      // turn right
      compassPoint = turnRight(compassPoint);
    } else if (instructions[i] === 'M') {
      // move forward
      move(position, compassPoint);
      if (checkPlateu(grid, position)) {
        return `Rover has fallen out of bounds! Fell at position ${position}`;
      }
    }
  }
  return `${position[0]} ${position[1]} ${compassPoint}`;
}

export function turnLeft(compassPoint) {
  // Changes the compassPoint depending on value
  if (compassPoint === direction.north) {
    console.log('Now Facing West..');
    compassPoint = 'W';
  } else if (compassPoint === direction.east) {
    console.log('Now Facing North..');
    compassPoint = 'N';
  } else if (compassPoint === direction.south) {
    console.log('Now Facing East..');
    compassPoint = 'E';
  } else if (compassPoint === direction.west) {
    console.log('Now Facing South..');
    compassPoint = 'S';
  } else {
    throw new Error('Incorrect Compass Point');
  }
  return compassPoint;
}

export function turnRight(compassPoint) {
  // Changes compassPoint depending on value
  if (compassPoint === direction.north) {
    console.log('Now Facing East..');
    compassPoint = 'E';
  } else if (compassPoint === direction.east) {
    console.log('Now Facing South..');
    compassPoint = 'S';
  } else if (compassPoint === direction.south) {
    console.log('Now Facing West..');
    compassPoint = 'W';
  } else if (compassPoint === direction.west) {
    console.log('Now Facing North..');
    compassPoint = 'N';
  } else {
    throw new Error('Incorrect Compass Point');
  }
  return compassPoint;
}

export function move(position, compassPoint) {
  // Increase / decreases the x,y depending on compassPoint
  if (compassPoint === direction.north) {
    console.log('Moving...');
    position[1] += 1;
  } else if (compassPoint === direction.east) {
    console.log('Moving...');
    position[0] += 1;
  } else if (compassPoint === direction.south) {
    console.log('Moving...');
    position[1] -= 1;
  } else if (compassPoint === direction.west) {
    console.log('Moving...');
    position[0] -= 1;
  } else {
    throw new Error('Incorrect Compass Point');
  }
  return position;
}

export function checkPlateu(plateu, pos) {
  // Checks the position x,y against the plateu x,y
  if (pos[0] > plateu[0] || pos[1] > plateu[1] || pos[0] < 0 || pos[1] < 0) {
    return true;
  }
  return false;
}
