/**
 * Validates a credit card number using the Luhn Algorithm.
 * * @param cardNumber - The card number as a string.
 * @returns boolean - True if valid, false otherwise.
 */
export const validateLuhnAlgorithm = (cardNumber: string): boolean => {

  const sanitizedNumber = cardNumber.replace(/[\s-]/g, '');

  if (!sanitizedNumber || !/^\d+$/.test(sanitizedNumber)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
    const char = sanitizedNumber[i] ?? '';
    let digit = parseInt(char, 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble; 
  }

  return sum % 10 === 0;
};