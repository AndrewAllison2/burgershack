export class Burger {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.cheese = data.cheese || false
  }
}