import { burgers } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {

  async getBurgers() {
    return burgers
  }

  async getBurgerById(burgerId) {
    const foundBurger = burgers.find(b => b.id == burgerId)

    if (!foundBurger) {
      throw new BadRequest(`${burgerId} was not a valid id`)
    }
    return foundBurger
  }

}


export const burgersService = new BurgersService()