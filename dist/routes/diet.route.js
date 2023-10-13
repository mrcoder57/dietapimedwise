import express from 'express';
import { getUserDiet, createUserDiet } from '../controllers/diet.controller.js';
const router = express.Router();
export default (router) => {
    router.get("/diets", getUserDiet);
    router.post("/diet", createUserDiet);
};
//# sourceMappingURL=diet.route.js.map