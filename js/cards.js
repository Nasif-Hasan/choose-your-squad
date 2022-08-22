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