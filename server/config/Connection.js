import mongoose from "mongoose";

const Connection = async () => {
    try {
        const url = process.env.Mongo_Url;
        await mongoose.connect(url);
        console.log("db connected successfully");
    } catch (error) {
        console.log("error while connceting to db",error)
    }
};


export default Connection;
