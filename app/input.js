import * as readline from 'readline';
import { navigate } from './helpers/navigation.js';
import {
  handleCoordinates,
  handleDirections,
  handleStartingPosition,
} from './helpers/inputValidation.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const waitForGridResponse = () => {
  return new Promise((resolve) => {
    function ask() {
      rl.question(
        'How big is the grid?\n Enter two numbers with a space in between.\n Example: 5 5\n\n',
        function (grid) {
          const valid = handleCoordinates(grid);
          if (valid) {
            resolve(valid);
          } else {
            ask(); // Repeat the question until valid input is provided
          }
        },
      );
    }
    ask(); // Start the initial question
  });
};

export const waitForStartingPos = () => {
  return new Promise((resolve) => {
    function ask() {
      rl.question(
        'Now lets put in the starting position for the Rover!\n Example: 1 2 N\n\n',
        function (startingPos) {
          const valid = handleStartingPosition(startingPos);
          if (valid) {
            resolve(valid);
          } else {
            ask(); // Repeat the question until valid input is provided
          }
        },
      );
    }
    ask(); // Start the initial question
  });
};

export const waitForDirections = () => {
  return new Promise((resolve) => {
    function ask() {
      rl.question(
        'Enter the directions of the rover using only L,M or R.\n',
        function (directions) {
          const valid = handleDirections(directions);
          if (valid) {
            resolve(valid);
          } else {
            ask(); // Repeat the question until valid input is provided
          }
        },
      );
    }
    ask(); // Start the initial question
  });
};

export async function roverInput() {
  const inputDetails = {
    grid: await new Promise((resolve) => {
      resolve(waitForGridResponse());
    }),

    startingPos: await new Promise((resolve) => {
      resolve(waitForStartingPos());
    }),

    directions: await new Promise((resolve) => {
      resolve(waitForDirections());
    }),
  };
  const finalPos = navigate(inputDetails.directions, inputDetails.startingPos, inputDetails.grid);
  console.log(`Final Position is: ${finalPos}`);
  rl.close();
}

rl.on('close', function () {
  console.log('\nThanks, see you again next time!');
  process.exit(0);
});
