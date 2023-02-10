module.exports = class Product {
    constructor(name, description, price, pic) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.pic = pic;
    }

    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }

    setDecription(description) {
        this.description = description;
    }
    getDescription() {
        return this.description;
    }

    setPrice(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }

    setPic(pic) {
        this.pic = pic;
    }
    getPic() {
        return this.pic;
    }
}