import express from 'express'
import {homeController ,registerController} from '../server/controllers/auth-controller.js'

const router = express.Router();

// router.route('/').get(homeController)

//REGISTER || POST
router.post('/register', registerController);

export default router;