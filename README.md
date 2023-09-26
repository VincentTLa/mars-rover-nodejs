# MARS ROVERS

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their onboard cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

To control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right, respectively, without moving from its current spot.

'M' means move forward one grid point and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

## Input:

The first line of input is the upper-right coordinates of the plateau. The lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

## Output:

The output for each rover should be its final coordinates and heading.

Test Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

Expected Output:

1 3 N

5 1 E

# Assumptions

I have decided to complete this task using Javascript to help touch up my skills and knowledge.

## Design

To limit user error, I have split the inputs to their respective input fields, which is then validated.
The _size of the plateu_ which is limited to entering only two numbers and the _starting position_ which takes two numbers and a compass point (N, E, S, W)

User input is done through the use of _readline_ which is an interface constructor.

## Assumptions made while coding:

- If the rover was outside of plateu then it is considered as 'fallen'.
- The Compass Points are N,E,S,W only

# Running the code

To start with, clone the project. Then,

To run the project locally, simply install packages on the folder using
`npm install`

To run the application, cd into the app folder and run `node index.js`

To test the application, run `npm run test`

# Reflection

It was my first time using the readline package so I had a few struggles in the beginning on approaching loops with the user input if the user input was invalid. I'm glad I was able to get the hang of it and can see how it could be implemented in other projects.

From working on this project, I struggled a lot when it came to testing with Jest, as I was facing errors with imports. Though it is working now, I hope to learn from this experience and tackle this problem in future if it arises. I also need to play around more with Mocking funcitons.
