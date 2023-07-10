import { drinksService } from "../services/DrinksService.js";
import BaseController from "../utils/BaseController.js";

export class DrinksController extends BaseController {
  constructor() {
    super('api/drinks')
    this.router
      .get('', this.getDrinks)
      .get('/:id', this.getDrinkById)
  }

  getDrinks(req, res, next) {
    try {
      const drinks = drinksService.getDrinks()
      res.send(drinks)
    } catch (error) {
      next(error)
    }
  }

  getDrinkById(req, res, next) {
    try {
      const drinkId = req.params.id
      const drink = drinksService.getDrinkById(drinkId)
      res.send(drink)
    } catch (error) {
      next(error)
    }
  }
}