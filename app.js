import express from 'express';
import modelRouter from './routers/model.js';


const app = express();

const PUBLIC_DIR = 'public';
app.use(express.static(PUBLIC_DIR));

app.use('/model', modelRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started at port ${port}`));