import mongoose from "mongoose";

const dietPlanSchema = new mongoose.Schema({
  breakfast: {
    time: String,
    content: [{
      food: String,
      quantityInGrams: Number
    }]
  },
  lunch: {
    time: String,
    content: [{
      food: String,
      quantityInGrams: Number
    }]
  },
  dinner: {
    time: String,
    content: [{
      food: String,
      quantityInGrams: Number
    }]
  },
  snack: {
    time: String,
    content: [{
      food: String,
      quantityInGrams: Number
    }]
  }
});

export const DietPlan = mongoose.model('DietPlan', dietPlanSchema);

export const getAlldiet=()=>DietPlan.find()

export const createDiet=async(values:Record<string,any>)=>{
    try {
        const diet=await new DietPlan(values).save()
        return diet.toObject()
    } catch (error) {
        console.log(error)
    }

}
