
// Calculate Button
document.getElementById('calculate').addEventListener('click', function(){
    mySalary();
 
})
const incomeInput = document.getElementById("income-input");
const food = document.getElementById('food-taka');
const rent = document.getElementById('rent-taka');
const clothes = document.getElementById('clothes-taka');
const expens = document.getElementById('total-expense');
const balance = document.getElementById('have-balane');
 
 
function mySalary(){
if( isNaN(incomeInput.value) && isNaN(food.value) && isNaN(rent.value) && isNaN(clothes) ){
   const showDisplay =  document.getElementById('alert-count');
        showDisplay.style.display = 'block';
}
 
    function totalExpense(){
     
        const foodValue = parseFloat(food.value);
        const rentValue = parseFloat(rent.value)
        const clothesValue = parseFloat(clothes.value)
        const totalExpensee = foodValue + rentValue + clothesValue;
              return totalExpensee;
               
    }
    const incomeinputValue = parseInt(incomeInput.value);
   
    if(incomeInput.value > 0 && food.value > 0 && rent.value > 0 && clothes.value > 0 ){
        if(totalExpense() > incomeInput.value ){    
             document.getElementById('show-exp').style.display = 'block';
    }
    else{
        document.getElementById('show-exp').style.display = 'none';
        const showDisplay =  document.getElementById('alert-count');
        showDisplay.style.display = 'none';
       
     
              expens.innerText = totalExpense();
        const totalBalance = incomeinputValue - totalExpense()
                 balance.innerText = totalBalance;
        }
    }
 
    //  clear inputs value
     food.value = '';
     rent.value = '';
     clothes.value = '';
     incomeInput.value = '';
 
}
 
 
// save Button
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

