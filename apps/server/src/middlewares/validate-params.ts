import { ZodSchema } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validateParams =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params);
    const result = schema.safeParse(req.params);

    console.log(result);

    if (!result.success) {
      return res.status(400).json({
        message: 'Query parameters validation error.',
        errors: result.error.issues,
      });
    }

    req.params = result.data;
    next();
  };
