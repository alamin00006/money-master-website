document.getElementById('calculate').addEventListener('click', function(){
    amarTaka();
   

})
const incomeInput = document.getElementById("income-input");
const food = document.getElementById('food-taka');
const rent = document.getElementById('rent-taka');
const clothes = document.getElementById('clothes-taka');
const expens = document.getElementById('total-expense');
const balance = document.getElementById('have-balane');


function amarTaka(){
const incomeinputValue = parseInt(incomeInput.value);
const foodValue = parseFloat(food.value);
const rentValue = parseFloat(rent.value)
const clothesValue = parseFloat(clothes.value)
const totalExpense = foodValue + rentValue + clothesValue;
      expens.innerText = totalExpense;
const totalBalance = incomeinputValue - totalExpense;
const balanceInner = parseFloat(balance.innerText);
     balance.innerText = balanceInner + totalBalance;

    //  clear inputs value
     food.value = '';
     rent.value = '';
     clothes.value = '';
     incomeInput.value = '';

}



function saveButton(){
    const savingInput = document.getElementById("saving-input");
    const savingInputValue = parseFloat(savingInput.value);
    const balance = document.getElementById("have-balane");
    const balanceInner = parseFloat(balance.innerText);
    const savingTaka =  balanceInner / 100;
    const totalSaving = savingTaka * savingInputValue;
    const saving = document.getElementById('total-saving');
          saving.innerText = totalSaving;
    const cashTaka = document.getElementById('cash-taka');
          cashTaka.innerText = balanceInner - saving.innerText;
          savingInput.value = '';
}