/*---All id's--->
income-input
food-input
rent-input
cloth-input
total-exp
balance
save-input
save-btn
calc-btn
saving-amount
remaining-balance */

//<====expenses calculation and saving calculation===>
function calculation() {
    const incomeInput = parseInt(document.getElementById('income-input').value);
    const foodInput = parseInt(document.getElementById('food-input').value);
    const rentInput = parseInt(document.getElementById('rent-input').value);
    const clothInput = parseInt(document.getElementById('cloth-input').value);
    let totalExpenses = document.getElementById('total-exp');
    let balance = document.getElementById('balance');

    //error handling
    if (isNaN(incomeInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothInput) || incomeInput < 0 || foodInput < 0 || rentInput < 0 || clothInput < 0) {
        alert('Please put a valid number')
    }
    else {
        //calc of total expenses
        var total = foodInput + rentInput + clothInput;
        if (total > incomeInput) {
            alert('You cant spend more than your income')
        }
        else {
            //calc of balance after expenses
            totalExpenses.innerText = total;
            remaining = incomeInput - total;
            balance.innerText = remaining;
        }
    }
}
//get calculate button
document.getElementById('calc-btn').addEventListener('click', function () {
    calculation(); //function called
});

// calculate saving section=====>
function saveCalculation() {
    const incomeInput = document.getElementById('income-input');
    let incomeInput_2 = incomeInput.value;
    let balance = document.getElementById('balance').innerText;
    let remainingBalance = document.getElementById('remaining-balance');
    const saveInput = document.getElementById('save-input').value;
    const savingAmount = document.getElementById('saving-amount');

    //error handeling
    if (saveInput > 0 && saveInput <= 100) {
        //calculating saving amount
        let amount = (incomeInput_2 * saveInput) / 100;
        //error handling
        if (amount > parseInt(balance)) {
            alert('You cant save more than your balance');
        }
        else {
            //calc of remaining balance
            let newRemainingBalance = parseInt(balance) - amount;
            savingAmount.innerText = amount;
            remainingBalance.innerText = newRemainingBalance;
        }
    }
    //error handeling
    else if (saveInput > 100 || saveInput < 0) {
        alert('You cant save more than your income')
    }
    else {
        alert('Please put a valid number')
    }
}
//get save button
document.getElementById('save-btn').addEventListener('click', function () {
    saveCalculation();
})
