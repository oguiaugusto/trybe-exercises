import mongoose from 'mongoose';

const defaultUri = 'mongodb://localhost:27017/choose_a_uri';
const connect = (uri: string = defaultUri) => mongoose.connect(uri);

export default connect;
