# Slot Machine Game

A simple command-line slot machine game built with Node.js.

## How to Play

1. Deposit money to start playing
2. Choose how many lines to bet on (1-3)
3. Enter your bet amount per line
4. Spin the reels and hope for matching symbols
5. Win money based on matching symbols across your bet lines

## Symbols & Payouts

| Symbol | Payout Multiplier | Probability |
|--------|-------------------|-------------|
| Cherry | 2x | 35% |
| Lemon | 3x | 30% |
| Orange | 5x | 20% |
| Plum | 8x | 10% |
| Seven | 20x | 4% |
| Diamond | 50x | 1% |

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/DebL0g/slot-machine.git
cd slot-machine
```

2. Install dependencies:
```bash
npm install prompt-sync
```

3. Run the game:
```bash
node slot.js
```

## Requirements

- Node.js installed on your system
- prompt-sync package for user input

## Game Rules

- You can bet on 1, 2, or 3 horizontal lines
- To win, all 3 symbols in a line must match
- Winnings = Symbol Value × Bet Amount
- The game ends when you run out of money or choose to quit

## Example Gameplay
```
==========================================
         SLOT MACHINE
==========================================
Your Balance: $1000
==========================================

Enter the numbers of lines to bet on (1-3): 3
Enter the bet per line: 50

Total Bet: $150
Spinning...

Cherry|Cherry|Cherry
Lemon|Orange|Plum
Orange|Orange|Orange

You won: $350

==========================================
New Balance: $1200
==========================================
```

## Technologies Used

- JavaScript (Node.js)
- prompt-sync for CLI input

## License

This project is open source and available for anyone to use and modify.

## Contributing

Feel free to fork this project and add your own features.

## Author

DebL0g - [GitHub Profile](https://github.com/DebL0g)
