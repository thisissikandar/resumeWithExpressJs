import express from "express"
import { homeController } from "../controllers/homeController.js";
import { contactController } from "../controllers/contactController.js";
import { serviceController } from "../controllers/serviceController.js";
import { skillController } from "../controllers/skillController.js";
const router = express.Router();

router.get("/", homeController)
router.get("/contact", contactController)
router.get("/service", serviceController)
router.get("/skill", skillController)


export default router
