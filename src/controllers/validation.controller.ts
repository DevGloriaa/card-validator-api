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
      error: 'An internal server error occurred',
    });
  }
};