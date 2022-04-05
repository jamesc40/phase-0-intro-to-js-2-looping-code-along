// Code your solutions in this file
function writeCards(names, event){
    const tyCards = [];
    for(let i = 0; i < names.length; i++){
        tyCards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return tyCards;
}

function countDown(x){
    while(x >= 0){
        console.log(x);
        x--;
    }
}