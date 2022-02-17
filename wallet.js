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


//
function calculation() {
    const incomeInput = parseInt (document.getElementById('income-input').value);
    const foodInput = parseInt (document.getElementById('food-input').value);
    const rentInput = parseInt(document.getElementById('rent-input').value);
    const clothInput =parseInt (document.getElementById('cloth-input').value);
    let totalExpenses = document.getElementById('total-exp');
    let balance = document.getElementById('balance');
    
    //error handling
    if (isNaN (incomeInput) || isNaN (foodInput)  || isNaN(rentInput) || isNaN(clothInput) || incomeInput < 0 || foodInput < 0 || rentInput < 0 || clothInput < 0){
        alert('Please put a valid number')
    }
   
    else{
        
        var total = foodInput + rentInput +clothInput;
        if (total > incomeInput){
            alert('You cant spend more than your income')
        }
        else{
            totalExpenses.innerText = total;
        remaining = parseFloat(incomeInput) - total;
        balance.innerText = remaining;
        }
    }
}

document.getElementById('calc-btn').addEventListener('click', function () {
    calculation();
});


// calculate save money part
function saveCalculation() {
    const incomeInput = document.getElementById('income-input');
    let incomeInput_2 = incomeInput.value;
    let balance = document.getElementById('balance').innerText;
    let remainingBalance = document.getElementById('remaining-balance');
    const saveInput = document.getElementById('save-input').value;
    const savingAmount = document.getElementById('saving-amount');

    //error handeling
    if (saveInput > 0 && saveInput <= 100){
        let amount = (incomeInput_2 * saveInput) / 100;
        if (amount > parseInt(balance)){
            alert('You cant save more than your balance');
        }
        
        else{
            let newRemainingBalance = parseInt(balance) - amount;
            savingAmount.innerText = amount;
            remainingBalance.innerText =  newRemainingBalance;
        }
    
    }
    else if (saveInput > 100 || saveInput< 0 ){
        alert('You cant save more than your income')
    }
    else{
        alert('Please put a valid number')
    }
    
}

document.getElementById('save-btn').addEventListener('click',function(){
    saveCalculation();
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
