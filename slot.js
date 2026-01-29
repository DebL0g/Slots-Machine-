// 1. deposit money 
// 2. determin number of line to bet 
// 2. collect a bet amnt
// 4. spin 
// 5. check the money
// 6. give their money 
// 7. play again 


const prompt = require("prompt-sync")();

//global vars
const ROW = 3;
const COLS = 3;

const SYMBOLS = {
    cherry: { value: 2, weight: 35, emoji: '🍒' },
    lemon: { value: 3, weight: 30, emoji: '🍋' },
    orange: { value: 5, weight: 20, emoji: '🍊' },
    plum: { value: 8, weight: 10, emoji: '🍇' },
    seven: { value: 20, weight: 4, emoji: '7️⃣' },
    diamond: { value: 50, weight: 1, emoji: '💎' }
};


const createpool = () => {
    const pool = [];
    for (const [symbolName, data] of Object.entries(SYMBOLS)) {

        for (let i = 0; i < data.weight; i++) {
            pool.push(symbolName);
        }

    }
    return pool;

};


const randomgene = (pool) => {
    const randomindex = Math.floor(Math.random() * pool.length);
    return pool[randomindex];

}


const spin = () => {
    const symbolpool = createpool();
    const reels = [];
    for (let col = 0; col < COLS; col++) {
        reels[col] = [];

        for (let row = 0; row < ROW; row++) {
            const symbol = randomgene(symbolpool);
            reels[col][row] = symbol;
        }
    }
    return reels;
}


const display = (reels) => {
    for (let row = 0; row < reels[0].length; row++) {
        let rowdisplay = '';

        for (let cols = 0; cols < reels.length; cols++) {
            const sysmbolName = reels[cols][row];
            const emoji = SYMBOLS[sysmbolName].emoji;
            rowdisplay += emoji + '';
            if (cols !== reels.length - 1) {
                rowdisplay += '|';

            }

        }
        console.log(rowdisplay);
    }

};


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

const getbet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numbet = parseFloat(bet);
        if (isNaN(numbet) || numbet <= 0 || numbet > balance / lines) {
            console.log("Invalid Value , try again ! ");

        } else {
            return numbet;
        }

    }
}


const checkwin = (reels, lines, bet) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++) {
        const firstsym = reels[0][row];
        let allsame = true;
        for (let col = 1; col < COLS; col++) {
            if (reels[col][row] !== firstsym) {
                allsame = false;
                break;
            }
        }
        if (allsame) {
            const symbolval = SYMBOLS[firstsym].value;
            const winamount = symbolval * bet;
            winnings += winamount;


        }
    }

    return winnings;

};


const game = () => {
    let balance = deposit();
    
    while (true) {
        console.log("\n==========================================");
        console.log("         🎰 SLOT MACHINE 🎰");
        console.log("==========================================");
        console.log("Your Balance: $" + balance);
        console.log("==========================================\n");

        const numoflines = getlines();
        const numbet = getbet(balance, numoflines);
        
        console.log(`\nTotal Bet: $${numbet * numoflines}`);
        console.log("Spinning...\n");
        
        balance -= numbet * numoflines;
        
        const reels = spin();
        display(reels);

        console.log(""); 
        
        const winnings = checkwin(reels, numoflines, numbet);
        balance += winnings;

        if (winnings > 0) {
            console.log("🎉 You won: $" + winnings + " 🎉");
        } else {
            console.log("❌ No win this time.");
        }
        
        console.log("\n==========================================");
        console.log("New Balance: $" + balance);
        console.log("==========================================\n");
        
        if (balance <= 0) {
            console.log("💸 Game over! You're broke! 💸\n");
            break;
        }

        const playagain = prompt("Play Again? (y/n): ");
        if (playagain.toLowerCase() !== 'y') {
            console.log("\n👋 Thanks for playing!");
            console.log("Final Balance: $" + balance + "\n");
            break;
        }
    }
};

game()







