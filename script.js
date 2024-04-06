const cells = document.querySelectorAll('td');
const message = document.getElementById('message');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Represent game state

cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});

function handleClick(event) {
  const cellIndex = event.target.id.split('-')[1] - 1; // Extract cell index from ID
  if (gameBoard[cellIndex] !== '') {
    return; // Don't allow clicks on occupied cells
  }
  
  gameBoard[cellIndex] = currentPlayer;
  event.target.textContent = currentPlayer;
  
  if (checkWinner()) {
    message.textContent = `${currentPlayer} Wins!`;
    return; // End game on win
  }
  
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turns
  message.textContent = `Current Player: ${currentPlayer}`;
}

function checkWinner() {
  // Implement winning condition checks here (e.g., rows, columns, diagonals)
  // You can use gameBoard array to check for patterns of 'X' or 'O'
  
  // Example check for first row
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') {
    return true;
  }
  
  // Add similar checks for other winning conditions
  return false;
}
