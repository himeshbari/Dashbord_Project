import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/configdb.js';
import dashbordRoutes from './router/dashbordRouter.js';
import bodyParser from 'body-parser'
import cors from "cors";


dotenv.config();
//connecting to mongodb database
connectDb();
const app = express();
//middleware bodyparser
app.use(express.json());
app.use(bodyParser.json())
app.use(cors())



//dotenv config
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});


app.use("/dashbord", dashbordRoutes);



const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      
  );
});
