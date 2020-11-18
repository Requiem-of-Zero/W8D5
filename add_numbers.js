const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = (sum, numsLeft, completionCb) => {
  if(numsLeft > 0) {
    reader.question("Please give me a number: ", function(answer) {
      const number = parseInt(answer);
      sum += number;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCb);
    })
  } else {
    completionCb(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

