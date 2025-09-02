# Rock, Paper, Scissor Game
The idea behind this game is that the computer chooses randomly between Rock, Paper and Scissor and a human enters his choice of the three choices. Then the program determines the winner by the following rules.
- Paper covers the rock with these choices the one who choose paper is the winner
- Scissor cuts the paper with these choices the one who choose scissor is the winner
- Rock crush the scissor with these choices the one who choose the rock is the winner

If it is a tie no one is winning
Then it outputs the winner in the console.

## Pseudocode:
1. Set number of rounds in our case 5
2. Initialize round counter variable to zero
3. Initialize computer score and human score to zero
4. While round counter is smaller than the number of rounds increment the counter by 1 then
  1. Get a user inputs a choice
  2. Get the computer choice
  3. If computers’ choice is equal to the users’ choice print `Its a tie`
  4. If computers’ choice is paper and users’ choice is rock, print `You lose! Paper covers the rock` and increment computers’ score by one.
  5. If users’ choice  is paper and computers’ is rock, print `You won! Paper covers the Rock` and increment users’ score by one.
  6. If computers’ choice is scissor and users’ choice is paper, print `You lose! Scissor cuts Paper` and increments computers’ score by one.
  7. If users’ choice  is scissor and computers’ is paper, print `You won! Scissor cuts Paper` and increment users’ score by one.
  8. If computers’ choice is rock and users’ choice is scissor, print `You lose! Rock crush Scissors` and increment computers’ score by one.
  9. If users’ choice  is rock and computers’ is scissor, print `You won! Rock crush Scissors` and increment users’ score by one.
5. If human score is equal to computer score print `No winner` with their scores.
6. If human score is greater than computer score print `You are the winner` otherwise print `You loose` with their scores.

Go ahead to play by following this [link.](https://ndosie.github.io/rock-paper-scissor-game/)