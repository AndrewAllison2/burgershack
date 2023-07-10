import { drinks } from "../db/FakeDrinkDb.js"
import { BadRequest } from "../utils/Errors.js"

class DrinksService {
  getDrinks() {
    return drinks
  }

  getDrinkById(drinkId) {
    const foundDrink = drinks.find(d => d.id == drinkId)
    if (!foundDrink) {
      throw new BadRequest(`${drinkId} is not a valid id`)
    }
    return foundDrink
  }

}

export const drinksService = new DrinksService()