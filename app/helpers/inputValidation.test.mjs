import { handleCoordinates, handleDirections, handleStartingPosition } from './inputValidation.js';

describe('handleCoordinates', () => {
  it('should return an array for valid coordinates input', () => {
    const input = '5 5';
    const result = handleCoordinates(input);
    expect(result).toEqual([5, 5]);
  });

  it('should return false for invalid coordinates input', () => {
    const input = '5A 5';
    const result = handleCoordinates(input);
    expect(result).toBe(false);
  });

  it('should return false for empty input', () => {
    const input = '';
    const result = handleCoordinates(input);
    expect(result).toBe(false);
  });
});

describe('handleStartingPosition', () => {
  it('should return an array for valid starting position input', () => {
    const input = '3 3 E';
    const result = handleStartingPosition(input);
    expect(result).toEqual([3, 3, 'E']);
  });

  it('should return false for invalid starting position input', () => {
    const input = '1 2 Z';
    const result = handleStartingPosition(input);
    expect(result).toBe(false);
  });

  it('should return false for empty input', () => {
    const input = '';
    const result = handleStartingPosition(input);
    expect(result).toBe(false);
  });
});

describe('handleDirections', () => {
  it('should return an array of characters for valid directions input', () => {
    const input = 'LRLRM';
    const result = handleDirections(input);
    expect(result).toEqual(['L', 'R', 'L', 'R', 'M']);
  });

  it('should return false for invalid directions input', () => {
    const input = 'L R M A';
    const result = handleDirections(input);
    expect(result).toBe(false);
  });

  it('should handle spaces and return an array of characters', () => {
    const input = 'L R M';
    const result = handleDirections(input);
    expect(result).toEqual(['L', 'R', 'M']);
  });

  it('should return false for empty input', () => {
    const input = '';
    const result = handleDirections(input);
    expect(result).toBe(false);
  });
});
