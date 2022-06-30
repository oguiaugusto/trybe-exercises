import { z } from 'zod';

const RecordStoreSchema = z.object({
  artist: z.string(),
  title: z.string(),
  format: z.string(),
  yearPublished: z.number(),
  new: z.boolean(),
});

type RecordStore = z.infer<typeof RecordStoreSchema>;

export { RecordStoreSchema };
export default RecordStore;
