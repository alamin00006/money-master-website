
// Calculate Button
document.getElementById('calculate').addEventListener('click', function(){
    mySalary();
 
 
})
// get element
const incomeInput = document.getElementById("income-input");
const food = document.getElementById('food-taka');
const rent = document.getElementById('rent-taka');
const clothes = document.getElementById('clothes-taka');
const expens = document.getElementById('total-expense');
const balance = document.getElementById('have-balance');
 
// total Expense
function totalExpense(){
     
    const foodValue = parseFloat(food.value);
    const rentValue = parseFloat(rent.value)
    const clothesValue = parseFloat(clothes.value)
    const totalExpensee = foodValue + rentValue + clothesValue;
          return totalExpensee;

}

//  Income amount input part
function mySalary(){
// if string
if( isNaN(incomeInput.value) && isNaN(food.value) && isNaN(rent.value) && isNaN(clothes) ){
   document.getElementById('alert-count').style.display = 'block';
        
        expens.innerText = '0';
        balance.innerText = '0';
}

    const incomeinputValue = parseInt(incomeInput.value);
// if negative value
    if(incomeInput.value < 0 && food.value < 0 && rent.value < 0 && clothes.value < 0 ){
        document.getElementById("negative-number").style.display = 'block';
        document.getElementById('alert-count').style.display = 'none';
            
        expens.innerText = '0';
        balance.innerText = '0';
           
      }
      else{
        document.getElementById("negative-number").style.display = 'none';
        
      }
    
// if possitve value
     if(incomeInput.value > 0 && food.value > 0 && rent.value > 0 && clothes.value > 0 ){
                
        if(totalExpense() > incomeInput.value ){    
             document.getElementById('show-exp').style.display = 'block';
             
            }
      else if(incomeInput.value > 0 && food.value > 0 && rent.value > 0 && clothes.value > 0 ){
        document.getElementById('show-exp').style.display = 'none';
        document.getElementById('alert-count').style.display = 'none';
       
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
    const balance = document.getElementById("have-balance");
    const balanceInner = parseFloat(balance.innerText);
    const savingTaka =  balanceInner / 100;
    const totalSaving = savingTaka * savingInputValue;
    const saving = document.getElementById('total-saving');
          saving.innerText = totalSaving;
        
    const cashTaka = document.getElementById('cash-taka');
          cashTaka.innerText = balanceInner - saving.innerText;         
          if(totalSaving > balance.innerText ){
            document.getElementById("balance-low").style.display = 'block';
            saving.innerText = '0';
            cashTaka.innerText = '0';  
          }
          else{
            document.getElementById("balance-low").style.display = 'none';
          }
// clear saving input value
          savingInput.value = '';
}

