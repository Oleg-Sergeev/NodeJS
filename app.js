import express from "express";
import modelRouter from "./routers/model/model.js";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();

app.use(cors());

const PUBLIC_DIR = "public";
app.use(express.static(PUBLIC_DIR));

app.use(bodyParser.json());

app.use("/model", modelRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started at port ${port}`));
