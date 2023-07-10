import { burgers } from "../db/FakeBurgerDb.js"
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

  async addBurger(burgerData) {
    burgerData.id = burgers.length + 1

    burgers.push(burgerData)

    return burgerData
  }

  async removeBurger(burgerId) {
    const foundIndex = burgers.findIndex(b => b.id == burgerId)

    if (foundIndex == -1) {
      throw new BadRequest(`${burgerId} was not a valid id`)
    }
    burgers.splice(foundIndex, 1)
  }

  async editBurger(burgerId, burgerData) {
    let originalBurger = await this.getBurgerById(burgerId)

    originalBurger.name = burgerData.name || originalBurger.name
    originalBurger.price = burgerData.price || originalBurger.price

    return originalBurger
  }

}


export const burgersService = new BurgersService()