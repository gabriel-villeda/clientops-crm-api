import express from 'express';
import clientRoutes from './clientRoutes.js';
//import worklogRoutes from './worklogRoutes.js';
//import projectRoutes from './projectRoutes.js';

const router = express.Router();

router.use('/clients' , clientRoutes);
//router.use('/worklog', worklogRoutes);
//router.use('/projects', projectRoutes);

export default router;

