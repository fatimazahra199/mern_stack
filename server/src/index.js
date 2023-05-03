import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import { fileURLToPath } from "url";
// import path from "path";

// dotenv.config({
//   path: path.join(
//     path.dirname(fileURLToPath(import.meta.url)),
//     "..",
//     "config",
//     ".env"
//   ),
// });

const app = express();

app.use(express.json());
app.use(cors());

// Set up the database connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("mongoDB connected..."))
//   .catch((err) => console.log(err));
mongoose.connect(
  "mongodb+srv://fatimazahra19:mernpasswordHVx@recipes.whnmvev.mongodb.net/recipes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("mongoDB connected..."))
.catch((err) => console.log(err));

app.listen(3001, () => console.log("SERVER STARTED ..."));
