import { Router } from "express";
import { Auth } from "../middlewares/auth";
import * as PageController from "../controllers/pageController";
import * as AuthController from "../controllers/authController";
import * as UserController from "../controllers/userController";
import { AuthValidator } from "../validators/AuthValidator";

export const router = Router();

// Main Page
router.get("/", PageController.inicio);
router.get("/next/:month", PageController.nextmonth);
router.get("/prev/:month", PageController.prevmonth);

// Login and Logout
router.post("/signup", AuthValidator.signup, AuthController.signup);
router.post("/signin", AuthValidator.signin, AuthController.signin);
router.get("/signin", AuthController.signinPage);
router.get("/signup", AuthController.signupPage);
router.get("/logout", AuthController.logout);

// Actions
router.get("/user/states", UserController.getStates);
router.get("/user/cities", UserController.getCities);
router.get("/user/churches", UserController.getChurches);

// User
router.get("/user/me", Auth.private, UserController.info);

// Other Pages
router.get("/quemsomos", PageController.quemsomos);
router.get("/recursos", PageController.recursos);

// Media
router.get("/aventura-biblica", PageController.aventura);
router.get("/1temporada", PageController.temp1);
router.get("/2temporada", PageController.temp2);

export default router;
