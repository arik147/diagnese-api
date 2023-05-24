import express from "express";

import galleriesController from '../controllers/galleries.controller.js';

const router =  express.Router();

/* galleries */
router.post('/v1/galleries', galleriesController.create);
router.get('/v1/galleries', galleriesController.get);


export default router;