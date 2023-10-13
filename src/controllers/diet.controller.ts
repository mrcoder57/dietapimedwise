import express from 'express'

import { getAlldiet,createDiet } from '../models/diet.model.js'
import { Request,Response } from 'express'

export const getUserDiet=async(req:Request,res:Response)=>{
    try {
        const medicines = await getAlldiet();
    
        return res.status(200).json(medicines);
      } catch (error) {
        console.log(error);
        return res.sendStatus(400);
      }
}

export const createUserDiet=async (req:Request, res:Response) => {
    try {
      const { breakfast, lunch, dinner, snack } = req.body;

      const diet = await createDiet({
        breakfast, lunch, dinner, snack
        
      });
      res.status(201).json(diet);
    } catch (error) {
      console.error('Error creating diet plan:', error);
      res.status(500).json({ error: 'Failed to create diet plan' });
    }
  };