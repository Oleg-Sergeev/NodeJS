import { Router } from "express";
import { fileURLToPath } from "url";
import path from "path";
import fileFilter from "../../middlewares/fileFilter.js";
import modelController from "../../controllers/modelController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

router.get("/", modelController.getModels);

router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "add.html"));
});

router.get("/:id", modelController.getModel);

router.get("/edit/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "edit.html"));
});

router.post("/add", fileFilter.uploadPhoto, modelController.addModel);
router.post("/edit/:id", fileFilter.uploadPhoto, modelController.editModel);
router.post("/delete/:id", modelController.deleteModel);

export default router;
