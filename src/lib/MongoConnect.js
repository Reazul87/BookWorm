const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;
const DB = process.env.DB_NAME;
export const collections = {
  BOOKS: "Books",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connect = async (collection) => {
  return client.db(DB).collection(collection);
};
export default connect;
