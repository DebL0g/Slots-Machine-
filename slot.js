// 1. deposit money 
// 2. determin number of line to bet 
// 2. collect a bet amnt
// 4. spin 
// 5. check the money
// 6. give their money 
// 7. play again 


const prompt = require("prompt-sync")();




const deposit = () => {
    while (true) {
        const depositamount = prompt("Enter a deposit amount: ");
        const numberdeposit = parseFloat(depositamount);
        if (isNaN(numberdeposit) || numberdeposit <= 0) {
            console.log("Invalid number , try again ");
        } else {


            return numberdeposit;

        }
    }

};
const getlines = () => {
    while (true) {
        const lines = prompt("Enter the numbers of lines to bet on (1-3): ");
        const numoflines = parseFloat(lines);
        if (isNaN(numoflines) || numoflines <= 0 || numoflines > 3) {
            console.log("Invalid value , try again !");

        } else {
            return numoflines;
        }
    }
};

const getbet = (balance,lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numbet = parseFloat(bet);
        if (isNaN(numbet) || numbet <= 0 || numbet > balance/lines) {
            console.log("Invalid Value , try again ! ");

        } else {
            return numbet;
        }

    }
}



let balance = deposit();
const numoflines = getlines();
const numbet = getbet(balance,numoflines);




