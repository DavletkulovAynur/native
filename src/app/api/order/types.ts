import { z } from "zod";

const location = z.object({
  id: z.number(),
  name: z.string(),
  district: z.string(),
  region: z.string(),
  createdAt: z.string(), // можно также использовать z.date() если вам нужно парсить дату
  updatedAt: z.string(), // можно также использовать z.date() если вам нужно парсить дату
  description: z.string().optional(),
  coordinates: z.nullable(
    z.object({
      // координаты
    })
  ),
});

const orderSchema = z.object({
  price: z.number(),
  agency: z.object({
    id: z.number(),
    createdAt: z.string(),
    description: z.string(),
    name: z.string(),
    phones: z.array(z.string()),
    updatedAt: z.string(),
  }),
  destination: location,
  origin: location,
});

export type TOrder = z.infer<typeof orderSchema>;
