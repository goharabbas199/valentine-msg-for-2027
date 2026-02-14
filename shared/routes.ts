import { z } from 'zod';
import { insertResponseSchema, responses } from './schema';

export const api = {
  responses: {
    create: {
      method: 'POST' as const,
      path: '/api/responses' as const,
      input: insertResponseSchema,
      responses: {
        201: z.custom<typeof responses.$inferSelect>(),
      },
    },
  },
};
