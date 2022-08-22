const playerArray = []

function display(allPlayers){ 

    const playerList = document.getElementById('selected-players');
    playerList.innerHTML = '';

    for (let i = 0; i < allPlayers.length; i++) {

        const name = playerArray[i].playerName  
        
        const li = document.createElement('li');

        li.innerHTML = `
        <p>${i + 1}   ${name}</p>
        `
        playerList.appendChild(li)

        if (i >= 4){
            break
        }
    }
}

function selectFive(element){    
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName
    }

    playerArray.push(playerObj);

    display(playerArray);
}


function playerTotal(){
    const playerMoneyField = document.getElementById('per-player');
    const playerMoneyString = playerMoneyField.value;
    const playerMoney = parseFloat(playerMoneyString);
    
    playerMoneyField.value = '';
    
    const playerTotalMoney = playerMoney * playerArray.length;
    
    const playerExpenses = document.getElementById('player-total');
    const playerExpensesString = playerExpenses.innerText;
    const previousExpensesTotal = parseFloat(playerExpensesString);
    
    const newPlayerExpenses = previousExpensesTotal + playerTotalMoney;
    playerExpenses.innerText = newPlayerExpenses;

}

function totalExpenses(){

    const managerMoneyField = document.getElementById('manager-money');
    const managerMoneyString = managerMoneyField.value;
    const managerMoney = parseFloat(managerMoneyString);

    const coachMoneyField = document.getElementById('coach-money');
    const coachMoneyString = coachMoneyField.value;
    const coachMoney = parseFloat(coachMoneyString);

    const playerExpenses = document.getElementById('player-total');
    const playerExpensesString = playerExpenses.innerText;
    const playersMoney = parseFloat(playerExpensesString);

    managerMoneyField.value = '';
    coachMoneyField.value = '';

    const totalExpenses = playersMoney + managerMoney + coachMoney;

    const totalExpensesField = document.getElementById('expence-total')
    const previousTotalExpensesString = totalExpensesField.innerText;
    const previousTotalMoney = parseFloat(previousTotalExpensesString);

    const newExpensesTotal = previousTotalMoney + totalExpenses;
    totalExpensesField.innerText = newExpensesTotal

}