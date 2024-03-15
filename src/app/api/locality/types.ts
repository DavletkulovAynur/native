import { z } from "zod";

const Locality = z.object({
 id: z.string(),
 name: z.string(),
 district: z.string(),
 region: z.string(),
 description: z.string(),
 coordinates: z.array(z.string()).nullable()

});

export type TLocality = z.infer<typeof Locality>;
