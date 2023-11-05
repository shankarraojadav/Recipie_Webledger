import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./config/Connection.js";

// routers import
import UserRouters from "./routes/userRouter.js"
import SearchRouters from "./routes/searchRouter.js";


dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("", UserRouters);
app.use("", SearchRouters);


app.listen(port, () => {
  console.log("server started", port);
});

Connection();
