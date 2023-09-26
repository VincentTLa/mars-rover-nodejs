import { navigate, turnLeft, turnRight, checkPlateu, move } from './navigation';
import { direction } from '../constants/directions';

describe('navigate', () => {
  it('should return the final position when given valid instructions', () => {
    const instructions = 'MMRMM';
    const position = [0, 0, 'N'];
    const grid = [5, 5];
    const result = navigate(instructions, position, grid);
    expect(result).toBe('2 2 E');
  });

  it('should handle turning left', () => {
    const instructions = 'L';
    const position = [0, 0, 'N'];
    const grid = [5, 5];
    const result = navigate(instructions, position, grid);
    expect(result).toBe('0 0 W');
  });

  it('should handle turning right', () => {
    const instructions = 'R';
    const position = [0, 0, 'N'];
    const grid = [5, 5];
    const result = navigate(instructions, position, grid);
    expect(result).toBe('0 0 E');
  });

  it('should handle moving forward', () => {
    const instructions = 'M';
    const position = [0, 0, 'N'];
    const grid = [5, 5];
    const result = navigate(instructions, position, grid);
    expect(result).toBe('0 1 N');
  });

  it('should handle falling out of bounds', () => {
    const instructions = 'MMMMMM';
    const position = [0, 0, 'N'];
    const grid = [5, 5];
    const result = navigate(instructions, position, grid);
    expect(result).toBe('Rover has fallen out of bounds! Fell at position 0,6,N');
  });
});

describe('turnLeft', () => {
  it('should turn left from North to West', () => {
    const result = turnLeft(direction.north);
    expect(result).toBe('W');
  });
});

describe('turnRight', () => {
  it('should turn right from North to East', () => {
    const result = turnRight(direction.north);
    expect(result).toBe('E');
  });
});

describe('move', () => {
  it('should move north', () => {
    const position = [0, 0, 'N'];
    const result = move(position, direction.north);
    expect(result).toEqual([0, 1, 'N']);
  });
});

describe('checkPlateu', () => {
  it('should return true when position is out of bounds', () => {
    const plateu = [5, 5];
    const pos = [6, 0];
    const result = checkPlateu(plateu, pos);
    expect(result).toBe(true);
  });

  it('should return false when position is within bounds', () => {
    const plateu = [5, 5];
    const pos = [4, 4];
    const result = checkPlateu(plateu, pos);
    expect(result).toBe(false);
  });
});
