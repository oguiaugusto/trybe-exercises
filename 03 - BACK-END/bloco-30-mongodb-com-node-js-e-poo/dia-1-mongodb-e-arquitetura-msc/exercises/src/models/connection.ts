import { connect } from 'mongoose';

const defaultUri = 'mongodb://localhost:27017/world_cups';
const connection = (uri: string = defaultUri) => connect(uri);

export default connection;