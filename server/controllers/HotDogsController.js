import { hotDogsService } from "../services/HotDogsService.js";
import BaseController from "../utils/BaseController.js";

export class HotDogsController extends BaseController {
  constructor() {
    super('api/hotdogs')

    this.router
      .get('', this.getHotDogs)
      .get('/:id', this.getHotDogById)
      .post('', this.addHotDog)
      .delete('/:id', this.removeHotDog)
      .put('/:id', this.editHotDog)
  }

  async getHotDogs(req, res, next) {
    try {
      const hotdogs = await hotDogsService.getHotDogs()

      res.send(hotdogs)
    } catch (error) {
      next(error)
    }
  }

  getHotDogById(req, res, next) {
    try {
      const dogId = req.params.id

      const foundHotDog = hotDogsService.getHotDogById(dogId)

      res.send(foundHotDog)
    } catch (error) {
      next(error)
    }
  }

  addHotDog(req, res, next) {
    try {
      const dogData = req.body
      const addedDog = hotDogsService.addHotDog(dogData)
      res.send(addedDog)

    } catch (error) {
      next(error)
    }
  }

  removeHotDog(req, res, next) {
    try {
      const dogId = req.params.id

      hotDogsService.removeHotDog(dogId)

      res.send('Took that dog off the menu!')

    } catch (error) {
      next(error)
    }
  }

  editHotDog(req, res, next) {
    try {
      const dogId = req.params.id
      const dogData = req.body
      const editedDog = hotDogsService.editHotDog(dogId, dogData)

      res.send(editedDog)

    } catch (error) {
      next(error)
    }
  }

}