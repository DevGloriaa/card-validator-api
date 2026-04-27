import { validateLuhnAlgorithm } from '../src/services/validation.service';

describe('Card Validation Service (Luhn Algorithm)', () => {
  test('should return true for a valid Luhn number', () => {
    expect(validateLuhnAlgorithm('49927398716')).toBe(true);
  });

  test('should return false for an invalid Luhn number', () => {
    expect(validateLuhnAlgorithm('49927398717')).toBe(false);
  });

  test('should handle spaces and dashes correctly', () => {
    expect(validateLuhnAlgorithm('4992 7398 716')).toBe(true);
    expect(validateLuhnAlgorithm('4992-7398-716')).toBe(true);
  });

  test('should return false for strings with letters', () => {
    expect(validateLuhnAlgorithm('4992739871a')).toBe(false);
  });

  test('should return false for empty strings', () => {
    expect(validateLuhnAlgorithm('')).toBe(false);
  });
});