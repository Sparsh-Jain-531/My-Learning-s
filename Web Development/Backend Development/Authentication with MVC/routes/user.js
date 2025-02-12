import express from 'express';
import isAuthenticated from '../middlewares/auth.js';
import { Home, Login, loginPage, logout, newUser, registerPage, success } from '../controllers/user.js';

const router=express.Router();

// All get routes
router.get("/",isAuthenticated,Home)

router.get("/register",registerPage)

router.get("/login",loginPage)

router.get("/success",success)

router.get("/logout",logout)

// All post routes
router.post("/register",newUser);

router.post("/login",Login)

export default router;