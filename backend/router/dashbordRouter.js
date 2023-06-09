import express from 'express'

import {  getDashbord } from "../controllers/dashbordController.js";

const router = express.Router();

router.get('/get-dashbord',getDashbord);
export default router;

