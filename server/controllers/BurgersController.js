import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')

    this.router
      .get('', this.getBurgers)
      .get('/:id', this.getBurgerById)
  }

  async getBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getBurgers()
      console.log(burgers);

      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async getBurgerById(req, res, next) {
    try {
      const burgerId = req.params.id

      const foundBurger = await burgersService.getBurgerById(burgerId)
      res.send(foundBurger)
    } catch (error) {
      next(error)
    }
  }
}