import mongoose from "mongoose"

mongoose.connect("mongodb+srv://eliezer:12345@nodeapi.alontrn.mongodb.net/api-node");

let db = mongoose.connection;

export default db;