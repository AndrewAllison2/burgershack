import { hotDogs } from "../db/FakeHotDogDb.js"
import { BadRequest } from "../utils/Errors.js"

class HotDogsService {

  getHotDogs() {
    return hotDogs
  }

  getHotDogById(dogId) {
    const foundDog = hotDogs.find(h => h.id == dogId)

    if (!foundDog) {
      throw new BadRequest(`${dogId} is not a valid id`)
    }
    return foundDog
  }

  addHotDog(dogData) {
    dogData.id = hotDogs.length + 1
    hotDogs.push(dogData)

    return dogData
  }

  removeHotDog(dogId) {
    const foundIndex = hotDogs.findIndex(h => h.id == dogId)

    hotDogs.splice(foundIndex, 1)
  }

  editHotDog(dogId, dogData) {
    let originalDog = this.getHotDogById(dogId)

    originalDog.name = dogData.name || originalDog.name
    originalDog.price = dogData.price || originalDog.price
    originalDog.toppings = dogData.toppings || originalDog.toppings
  }

}

export const hotDogsService = new HotDogsService()