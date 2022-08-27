function numberGenerator() 
{
    return (randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100);
}

const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = numberGenerator();
    console.log(numbers[i]);
}

function secondMax() {
    let position;
    let maxValue = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
            position = i;
        }
    }
    numbers.splice(position, 1);
    maxValue = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }
    console.log("maxValue", maxValue);
}
secondMax();