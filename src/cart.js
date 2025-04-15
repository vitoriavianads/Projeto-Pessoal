class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity, price) {
        if (!product || quantity <= 0 || price < 0) throw new Error('Dados inválidos');
        const index = this.items.findIndex(item => item.product === product);
        if (index > -1) {
            this.items[index].quantity += quantity;
        } else {
            this.items.push({ product, quantity, price });
        }
    }

    removeItem(product) {
        const index = this.items.findIndex(item => item.product === product);
        if (index === -1) throw new Error('Produto não encontrado');
        this.items.splice(index, 1);
    }

    updateQuantity(product, quantity) {
        if (quantity < 0) throw new Error('Quantidade inválida');
        const item = this.items.find(item => item.product === product);
        if (!item) throw new Error('Produto não encontrado');
        item.quantity = quantity;
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
    }
}

module.exports = Cart;
