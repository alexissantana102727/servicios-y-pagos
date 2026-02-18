// script.js for Recharge Store Game

// Example: Initialize the game
function initGame() {
    console.log('Recharge Store Game Initialized');
}

// Example: Set player balance
let playerBalance = 100;

// Example: Function to recharge player balance
function recharge(amount) {
    playerBalance += amount;
    console.log(`Player balance updated: $${playerBalance}`);
}

// Example: Function to spend balance on a recharge
function spend(amount) {
    if (playerBalance >= amount) {
        playerBalance -= amount;
        console.log(`Spent $${amount}. New balance: $${playerBalance}`);
    } else {
        console.log('Insufficient balance!');
    }
}

// Initialize the game
initGame();

// Sample usage
recharge(50); // Add $50
spend(30); // Spend $30