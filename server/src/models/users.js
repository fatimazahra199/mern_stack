import mongoose from "mongoose"

const myDataSchema = new mongoose.Schema({
  username: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

// Create a model based on the schema
export const MyData = mongoose.model('users', myDataSchema);
