import { Request, Response } from 'express';
import { validateLuhnAlgorithm } from '../services/validation.service';

export const validateCard = (req: Request, res: Response): void => {
  try {
    const { cardNumber } = req.body;

    if (cardNumber === undefined || cardNumber === null) {
      res.status(400).json({
        success: false,
        error: 'Missing required field: cardNumber',
      });
      return;
    }

    if (typeof cardNumber !== 'string') {
      res.status(400).json({
        success: false,
        error: 'Invalid input type: cardNumber must be a string',
      });
      return;
    }

    const strippedCardNumber = cardNumber.replace(/[\s-]/g, '');

    if (strippedCardNumber.length === 0) {
      res.status(400).json({
        success: false,
        error: 'Invalid input: Card number cannot be empty',
      });
      return;
    }

    if (!/^\d+$/.test(strippedCardNumber)) {
      res.status(400).json({
        success: false,
        error: 'Invalid format: Card number must contain only numeric digits',
      });
      return;
    }

    const isValid = validateLuhnAlgorithm(cardNumber);

    res.status(200).json({
      success: true,
      data: {
        isValid,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'internal server error',
    });
  }
};