import { model as createModel, Document, Schema } from 'mongoose';
import RecordStore from '../interfaces/RecordStore';
import MongoModel from './MongoModel';

interface RecordStoreDocument extends RecordStore, Document {}

const RecordStoreSchema = new Schema<RecordStoreDocument>({
  artist: { type: String, required: true },
  title: { type: String, required: true },
  format: { type: String, required: true },
  yearPublished: { type: Number, required: true },
  new: { type: Boolean, required: true },
});

class RecordStoreModel extends MongoModel<RecordStore> {
  constructor(model = createModel('RecordStore', RecordStoreSchema)) {
    super(model);
  }
}

export default RecordStoreModel;
