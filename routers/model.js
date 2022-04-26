import { Router } from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = Router();

router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "model", "add.js"));
});

router.post('/add', (req, res) => {
  
});


router.get('/:id', (req, res) => {
  res.send(`Model id ${req.params["id"]}`);
});


export default router;