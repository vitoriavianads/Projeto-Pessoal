const Cart = require('../src/cart');

describe('Carrinho de Compras', () => {
    let cart;

    beforeEach(() => {
        cart = new Cart();
    });

    test('1. Adiciona item ao carrinho', () => {
        cart.addItem('Notebook', 1, 3000);
        expect(cart.getItems().length).toBe(1);
    });

    test('2. Soma a quantidade se o produto já existe', () => {
        cart.addItem('Mouse', 1, 50);
        cart.addItem('Mouse', 2, 50);
        expect(cart.getItems()[0].quantity).toBe(3);
    });

    test('3. Calcula total corretamente', () => {
        cart.addItem('Teclado', 2, 100);
        cart.addItem('Monitor', 1, 500);
        expect(cart.getTotal()).toBe(700);
    });

    test('4. Remove item do carrinho', () => {
        cart.addItem('Fone', 1, 100);
        cart.removeItem('Fone');
        expect(cart.getItems().length).toBe(0);
    });

    test('5. Atualiza quantidade do item', () => {
        cart.addItem('Webcam', 2, 150);
        cart.updateQuantity('Webcam', 5);
        expect(cart.getItems()[0].quantity).toBe(5);
    });

    test('6. Lança erro ao remover item inexistente', () => {
        expect(() => cart.removeItem('Tablet')).toThrow('Produto não encontrado');
    });

    test('7. Lança erro ao atualizar item inexistente', () => {
        expect(() => cart.updateQuantity('TV', 2)).toThrow('Produto não encontrado');
    });

    test('8. Lança erro ao usar quantidade negativa', () => {
        cart.addItem('HD', 1, 200);
        expect(() => cart.updateQuantity('HD', -1)).toThrow('Quantidade inválida');
    });

    test('9. Lança erro ao adicionar item com dados inválidos', () => {
        expect(() => cart.addItem('', 1, 100)).toThrow('Dados inválidos');
        expect(() => cart.addItem('SSD', 0, 100)).toThrow('Dados inválidos');
        expect(() => cart.addItem('SSD', 1, -100)).toThrow('Dados inválidos');
    });

    test('10. Limpa todos os itens do carrinho', () => {
        cart.addItem('Processador', 2, 800);
        cart.clearCart();
        expect(cart.getItems().length).toBe(0);
    });
});
