import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  intensity: { type: String, required: true },
  likelihood: { type: Number, required: true },
  relevance: { type: String, required: true },
  year: { type: Number, required: true },
  country: { type: String, required: true },
  topic: { type: [String], required: true }, 
  region: { type: String, required: true },
  city: { type: String, required: true },
});

const Data = mongoose.model("Data", dataSchema);
export default Data;
