// main.js

// User Authentication
class User {
    constructor(id, username) {
        this.id = id;
        this.username = username;
    }
}

class Auth {
    constructor() {
        this.users = {};
        this.currentUser = null;
    }

    register(id, username) {
        const user = new User(id, username);
        this.users[id] = user;
    }

    login(id) {
        this.currentUser = this.users[id];
    }

    logout() {
        this.currentUser = null;
    }
}

// Shopping Cart
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    viewCart() {
        return this.items;
    }

    clearCart() {
        this.items = [];
    }
}

// Purchase Handling
class PurchaseManager {
    constructor() {
        this.purchases = [];
    }

    makePurchase(cart, user) {
        if (!user) {
            throw new Error('User must be logged in to make a purchase.');
        }
        this.purchases.push({ user: user.username, items: cart.viewCart(), date: new Date() });
        cart.clearCart();
    }
}

// Example usage
const auth = new Auth();
auth.register(1, 'Player1');
auth.login(1);

const cart = new ShoppingCart();
cart.addItem({ id: 'item1', name: 'Game Credit', price: 50 });

const purchaseManager = new PurchaseManager();
purchaseManager.makePurchase(cart, auth.currentUser);

console.log(purchaseManager.purchases); // View all purchases
