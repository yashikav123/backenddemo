import express from "express";
import {createUser,create,update} from "../controller/userController.js";
const router=express.Router();
router.get("/createUser",createUser);
router.post("/createss",create);
router.put("/update/:id",update);

export default router;