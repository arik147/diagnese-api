import express from "express";
// import { verifyToken, adminVerifyToken } from "../middlewares/VerifyToken.js";

// import controller
// import usersController from "../controllers/users.controller.js";
import galleriesController from '../controllers/galleries.controller.js';
// import programsController from "../controllers/programs.controller.js";
// import teachersController from "../controllers/teachers.controller.js";
// import statsController from "../controllers/stats.controller.js";
// import ppdbController from "../controllers/ppdb.controller.js";
// import profileController from "../controllers/profile.controller.js";
// import studentsController from "../controllers/students.controller.js";

const router =  express.Router();

// import cloudinaryConfig from "../configs/cloudinary.config.js";

/* galleries */
router.post('/v1/galleries', galleriesController.create);
router.get('/v1/galleries', galleriesController.get);


export default router;