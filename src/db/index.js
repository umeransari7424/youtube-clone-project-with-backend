import mongoose  from "mongoose";

 const ConnectDb = async () => {
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log('MongoDb Connected:',connectionInstance.connection.host)
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}

export default ConnectDb;