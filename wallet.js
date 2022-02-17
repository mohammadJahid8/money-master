/* income-input
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

function calcInput() {
    const incomeInput = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;
    let totalExpenses = document.getElementById('total-exp');
    let balance = document.getElementById('balance');
    total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput) ;
    totalExpenses.innerText = total;
    remaining = parseFloat(incomeInput) - total;
    balance.innerText = remaining;
}

document.getElementById('calc-btn').addEventListener('click', function () {
    calcInput();
});


// calculate save money part
function saveMoney() {
    const incomeInput = document.getElementById('income-input');
    let incomeInputValue = incomeInput.value;
    let balance = document.getElementById('balance').innerText;
    let remainingBalanceNumber = document.getElementById('remaining-balance');
    const saveMoneyInput = document.getElementById('save-input').value;
    const savingAmount = document.getElementById('saving-amount');
    let savesMoney = (incomeInputValue * saveMoneyInput) / 100;
    remainingBalance = parseFloat(balance) - savesMoney;
    savingAmount.innerText = savesMoney;
    remainingBalanceNumber.innerText =  remainingBalance;
}

document.getElementById('save-btn').addEventListener('click',function(){
    saveMoney();
})

// get calculate button 
// document.getElementById('calc-btn').addEventListener('click', function () {
//     // get food input
//     const getFoodInput = document.getElementById('food-input');
//     const foodInputText = getFoodInput.value;
//     const foodInput = parseFloat(foodInputText)



//     //get rent input
//     const getRentInput = document.getElementById('rent-input');
//     const rentInputText = getRentInput.value;
//     const rentInput = parseFloat(rentInputText);


//     //get rent input
//     const getClothInput = document.getElementById('cloth-input');
//     const clothInputText = getClothInput.value;
//     const clothInput = parseFloat(clothInputText);

//     //total expenses
//     const totalExpenses = foodInput + rentInput + clothInput;



//     //get total expenses
//     const getPreviousTotalExpenses = document.getElementById('total-exp');
//     const previousTotalExpensesText = getPreviousTotalExpenses.innerText;
//     const previousTotalExpenses = parseFloat(previousTotalExpensesText);
//     const newTotalExpenses = previousTotalExpenses + totalExpenses;
//     getPreviousTotalExpenses.innerText = newTotalExpenses;

//     //get income input
//     const getIncomeInput = document.getElementById('income-input');
//     const incomeInputText = getIncomeInput.value;
//     const incomeInput = parseFloat(incomeInputText);

//     //get remaining income
//     const remainingIncome = incomeInput - newTotalExpenses;

//     //get balance
//     const getpreviousBalance = document.getElementById('balance');
//     const previousBalanceText = getpreviousBalance.innerText;
//     const previousBalance = parseFloat(previousBalanceText);
//     const newBalance = previousBalance + remainingIncome;
//     getpreviousBalance.innerText = newBalance;

//     getFoodInput.value = '';
//     getRentInput.value = '';
//     getClothInput.value = '';

// })

// document.getElementById('save-btn').addEventListener('click', function () {
//     const getSaveInput = document.getElementById('save-input');
//     const saveInputText = getSaveInput.value;
//     const saveInput = parseFloat(saveInputText);

//     const getIncomeInput = document.getElementById('income-input');
//     const incomeInputText = getIncomeInput.value;
//     const incomeInput = parseFloat(incomeInputText);

//     const totalSavings = incomeInput * saveInput / 100;

//     const getSavingAmount = document.getElementById('saving-amount');
//     const savingAmountText = getSavingAmount.innerText;
//     const savingAmount = parseFloat(savingAmountText);

//     getSavingAmount.innerText = totalSavings;

//     //get remaining balance


//     const getRemainingBalance = document.getElementById('remaining-balance');
//     const remainingBalanceText = getRemainingBalance.innerText;
//     const remainingBalance = parseFloat(remainingBalanceText);
//     const newRemainingBalance = newBalance - savingAmount +remainingBalance;
//     getRemainingBalance.innerText = newRemainingBalance;

// })
// getSaveInput.value = '';

//savings section 
// document.getElementById('save-btn').addEventListener('click', function () {
//     const getSaveInput = document.getElementById('save-input');
//     const saveInputText = getSaveInput.value;
//     const saveInput = parseFloat(saveInputText);

//     const getIncomeInput = document.getElementById('income-input');
//     const incomeInputText = getIncomeInput.value;
//     const incomeInput = parseFloat(incomeInputText);

//     const totalSavings = incomeInput * saveInput / 100;

//     const getSavingAmount = document.getElementById('saving-amount');
//     const savingAmountText = getSavingAmount.innerText;
//     const savingAmount = parseFloat(savingAmountText);

//     getSavingAmount.innerText = totalSavings;

    //get remaining balance


    // const getRemainingBalance = documentg.getElementById('remaining-balance');
    // const remainingBalanceText = getRemainingBalance.innerText;
    // const remainingBalance = parseFloat(remainingBalanceText);
    // const newRemainingBalance = newBalance - savingAmount;

    // getRemainingBalance.innerText= 
// })
