// SpendWise - JavaScript Foundation

// VARIABLES
let totalBudget = 0;
let budgetName = "";
let budgetPeriod = "";
let totalExpenses = 0;
let remainingBalance = 0;
let expenseCount = 0;
let expenses = [];

// FUNCTION: Initialize Budget
function initializeBudget() {
    console.log("\n=== BUDGET INITIALIZATION ===");
    
    budgetName = prompt("Enter budget name:");
    if (budgetName === null || budgetName === "") {
        budgetName = "My Budget";
    }
    
    budgetPeriod = prompt("Weekly or monthly?");
    if (budgetPeriod === null || budgetPeriod === "") {
        budgetPeriod = "monthly";
    }
    
    let input = prompt("Enter total budget:");
    totalBudget = parseFloat(input);
    
    if (isNaN(totalBudget) || totalBudget <= 0) {
        totalBudget = 0;
    }
    
    console.log("Budget: " + budgetName);
    console.log("Period: " + budgetPeriod);
    console.log("Amount: $" + totalBudget.toFixed(2));
    
    expenses = [];
    totalExpenses = 0;
    expenseCount = 0;
    
    calculateRemainingBalance();
    displayBudgetSummary();
}

// FUNCTION: Add Expense
function addExpense() {
    console.log("\n=== ADD EXPENSE ===");
    
    let name = prompt("Expense name:");
    if (name === null || name === "") {
        name = "Expense";
    }
    
    let input = prompt("Amount for " + name + ":");
    let amount = parseFloat(input);
    
    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount");
        return;
    }
    
    expenses.push({ name: name, amount: amount });
    expenseCount = expenseCount + 1;
    totalExpenses = totalExpenses + amount;
    
    console.log("Added: " + name + " $" + amount.toFixed(2));
    
    calculateRemainingBalance();
    displayBudgetSummary();
}

// FUNCTION: Calculate Remaining Balance
function calculateRemainingBalance() {
    remainingBalance = totalBudget - totalExpenses;
    console.log("\nRemaining: $" + remainingBalance.toFixed(2));
    return remainingBalance;
}

// FUNCTION: Display Budget Summary
function displayBudgetSummary() {
    console.log("\n========== BUDGET SUMMARY ==========");
    console.log("Name: " + budgetName);
    console.log("Total Budget: $" + totalBudget.toFixed(2));
    console.log("Total Expenses: $" + totalExpenses.toFixed(2));
    console.log("Remaining: $" + remainingBalance.toFixed(2));
    console.log("Expenses: " + expenseCount);
    
    if (expenses.length > 0) {
        console.log("\nDetails:");
        for (let i = 0; i < expenses.length; i = i + 1) {
            console.log((i + 1) + ". " + expenses[i].name + ": $" + expenses[i].amount.toFixed(2));
        }
    }
    
    if (remainingBalance > 0) {
        console.log("\nWithin budget!");
    } else if (remainingBalance === 0) {
        console.log("\nBudget spent");
    } else {
        console.log("\nOver budget!");
    }
    console.log("====================================\n");
}

// EVENT LISTENER
document.addEventListener("DOMContentLoaded", function() {
    console.log("SpendWise Loaded!");
    
    let btn = document.getElementById("startBudget");
    if (btn) {
        btn.addEventListener("click", function() {
            if (totalBudget === 0) {
                initializeBudget();
            }
            addExpense();
        });
    }
});