export class HotDog {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.toppings = data.toppings || null

  }
}