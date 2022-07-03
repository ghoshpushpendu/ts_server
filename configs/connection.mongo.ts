import {
    MongoClient, ServerApiVersion, ConnectOptions,
} from 'mongodb';

const uri = 'mongodb+srv://testuser:testpassword@cluster0.fbuul.mongodb.net/sigma?retryWrites=true&w=majority';
const connectionOptions:any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
};
const client:MongoClient = new MongoClient(uri, connectionOptions as ConnectOptions);

export const connectDatabase = async () => {
    console.info('Connecting to the database.');

    try {
        await client.connect();
        console.info('Database connected.');
    } catch (e) {
        console.error('Database connection error :', e);
    }

    return client;
};

export default client;
