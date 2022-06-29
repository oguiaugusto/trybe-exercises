import mongoose from 'mongoose';

const connection = (databaseURI: string = 'mongodb://localhost:27017/model_example') => (
  mongoose.connect(databaseURI)
);

export default connection;
