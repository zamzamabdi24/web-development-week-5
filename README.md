# 💰 SpendWise - Personal Budget Tracker

## What Your SpendWise Project Does

**SpendWise** is a personal budgeting web application that helps users track their income and expenses. The application allows users to:
- Set a monthly or weekly budget
- Record individual expenses with names and amounts
- Automatically calculate remaining balance
- View all expenses in a list
- Get budget status updates (within budget, over budget, etc.)

All calculations and results are displayed in the browser console for easy monitoring and debugging.

---

## The JavaScript Concepts Implemented

This project demonstrates the following JavaScript concepts:

### 1. Variables and Data Types
- **Numbers**: Store monetary values (`totalBudget`, `totalExpenses`, `remainingBalance`)
- **Strings**: Store text data (`budgetName`, `budgetPeriod`, expense names)
- **Arrays**: Store collections of expense records (`expenses[]`)
- **Objects**: Structure individual expense data (`{name: string, amount: number}`)

### 2. User Input
- Using `prompt()` to collect information from users
- Validating input with conditional statements
- Converting string input to numbers with `parseFloat()`

### 3. Calculations
- Arithmetic operations (addition, subtraction)
- Comparison operators (`>`, `<`, `===`)
- Mathematical formulas for budget tracking

### 4. Functions
- Creating reusable blocks of code
- Organizing logic into separate functions
- Using return values

### 5. Event Handling
- Listening for button clicks
- Responding to user interactions
- DOM manipulation

---

## How Variables Are Being Used

### Budget Variables

```javascript
let totalBudget = 0;           // Stores the user's total budget amount
let budgetName = "";           // Stores the name/label for this budget
let budgetPeriod = "";         // Stores the budget period (weekly/monthly)
```

These variables store the budget information provided by the user and maintain the state throughout the application.

### Expense Variables

```javascript
let totalExpenses = 0;         // Tracks cumulative expenses
let remainingBalance = 0;      // Stores calculated remaining budget
let expenseCount = 0;          // Counts number of expenses added
let expenses = [];             // Array storing all expense objects
```

These variables track spending, calculate remaining balance, and store individual expense records.

### Variable Usage

- All variables are declared with `let` for mutable data
- Global scope allows all functions to access and update the data
- Variables maintain state between user interactions
- Data persists as long as the page is open

---

## How User Input Is Collected

### Using prompt() Function

The application collects user input through browser dialog boxes:

```javascript
// Collect budget name
budgetName = prompt("Enter a name for your budget:");

// Collect budget amount
let budgetInput = prompt("Enter your total budget amount:");

// Convert string to number
totalBudget = parseFloat(budgetInput);
```

### Input Validation

```javascript
// Check for empty or null input
if (budgetName === null || budgetName.trim() === "") {
    budgetName = "My Budget";  // Use default value
}

// Validate numeric input
if (isNaN(totalBudget) || totalBudget <= 0) {
    totalBudget = 0;  // Handle invalid numbers
}
```

### Data Type Conversion

```javascript
// prompt() returns a STRING
let userInput = prompt("Enter amount:");  // "150.50"

// Convert to NUMBER for calculations
let amount = parseFloat(userInput);  // 150.50

// Check if valid number
if (isNaN(amount)) {
    console.log("Invalid number");
}
```

---

## How Calculations Are Performed

### Remaining Balance Formula

**Formula**: `Remaining Balance = Total Budget - Total Expenses`

```javascript
function calculateRemainingBalance() {
    remainingBalance = totalBudget - totalExpenses;
    return remainingBalance;
}
```

**Example Calculation**:
- Total Budget: $2000.00
- Total Expenses: $650.00
- Remaining Balance: $2000.00 - $650.00 = **$1350.00**

### Adding Expenses

```javascript
// Add new expense to running total
totalExpenses = totalExpenses + expenseAmount;

// Example:
// Previous total: $500.00
// New expense: $150.00
// New total: $650.00
```

### Budget Status Check

```javascript
if (remainingBalance > 0) {
    console.log("✓ Within budget - $" + remainingBalance.toFixed(2) + " remaining");
} else if (remainingBalance === 0) {
    console.log("⚠ Budget exactly spent");
} else {
    console.log("✗ Over budget by $" + Math.abs(remainingBalance).toFixed(2));
}
```

---

## How Functions Help Organize the Code

### Functions Created

| Function | Purpose | What It Does |
|----------|---------|--------------|
| `initializeBudget()` | Set up new budget | Collects budget info, validates input, displays summary |
| `addExpense()` | Record expense | Collects expense info, adds to array, updates totals |
| `calculateRemainingBalance()` | Calculate balance | Performs budget math, returns remaining amount |
| `displayBudgetSummary()` | Show results | Displays all budget info in console |

### Benefits of Functions

1. **Modularity**: Each function handles one specific task
2. **Reusability**: Functions can be called multiple times
3. **Readability**: Function names explain what code does
4. **Maintainability**: Easy to update individual features
5. **Testing**: Each function can be tested separately

### Example Function

```javascript
function calculateRemainingBalance() {
    // Perform calculation
    remainingBalance = totalBudget - totalExpenses;
    
    // Display result
    console.log("Remaining: $" + remainingBalance.toFixed(2));
    
    // Return value
    return remainingBalance;
}
```

### Function Calls

```javascript
// Call function
calculateRemainingBalance();

// Use in condition
if (calculateRemainingBalance() > 0) {
    console.log("Good budget!");
}
```

---

## File Structure
