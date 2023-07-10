import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')

    this.router
      .get('', this.getBurgers)
      .get('/:id', this.getBurgerById)
      .post('', this.addBurger)
      .delete('/:id', this.removeBurger)
      .put('/:id', this.editBurger)
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

  async addBurger(req, res, next) {
    try {
      const burgerData = req.body
      const addedBurger = await burgersService.addBurger(burgerData)

      res.send(addedBurger)
    } catch (error) {
      next(error)
    }
  }

  async removeBurger(req, res, next) {
    try {
      const burgerId = req.params.id

      await burgersService.removeBurger(burgerId)

      res.send('That burger is gone!')

    } catch (error) {
      next(error)
    }
  }

  editBurger(req, res, next) {
    try {
      const burgerId = req.params.id

      const burgerData = req.body

      const updatedBurger = burgersService.editBurger(burgerId, burgerData)
      res.send(updatedBurger)

    } catch (error) {
      next(error)
    }
  }
}