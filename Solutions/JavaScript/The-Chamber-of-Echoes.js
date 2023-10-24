const echoes = [3, 6, 9, 12];
const memories = [];

// Document what this code is doing
// This code is predicting the next number in the sequence by finding the difference 
// between the first two numbers and adding that difference to the last number in the sequence.
function predictNext(echoes) {
    let difference = echoes[1] - echoes[0];
    let next = echoes[echoes.length - 1] + difference;
    // Store the full sequence including the predicted number in memories
    memories.push(...echoes, next);
    return next;
} 

console.log(predictNext(echoes));

