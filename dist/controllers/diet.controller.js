import { getAlldiet, createDiet } from '../models/diet.model.js';
export const getUserDiet = async (req, res) => {
    try {
        const medicines = await getAlldiet();
        return res.status(200).json(medicines);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
export const createUserDiet = async (req, res) => {
    try {
        const { breakfast, lunch, dinner, snack } = req.body;
        const diet = await createDiet({
            breakfast, lunch, dinner, snack
        });
        res.status(201).json(diet);
    }
    catch (error) {
        console.error('Error creating diet plan:', error);
        res.status(500).json({ error: 'Failed to create diet plan' });
    }
};
//# sourceMappingURL=diet.controller.js.map