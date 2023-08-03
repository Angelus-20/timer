const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timeLimit = 5000; 

rl.question('Enter reminder: ', (input) => {
  clearTimeout(timer); 

  const number = parseInt(input, 10);
  
  if (!input || isNaN(number) || number <= 0) {
    console.log('Error: Please enter a proper positive number.');
    rl.close();
  } else {
    const delay = number * 1000;
    setTimeout(() => {
      process.stdout.write(number + ' seconds have passed\n');
      rl.close();
    }, delay);
  }
});

// Set a timer to close the interface if the user takes too long to respond
const timer = setTimeout(() => {
  console.log('\nPlease try again.');
  rl.close();
}, timeLimit);
