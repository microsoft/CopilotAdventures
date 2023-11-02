/**
 * Predicts the next number in a sequence of echoes.
 * @param {number[]} echoes - An array of numbers representing the echoes.
 * @returns {number} - The next number in the sequence.
 */
const echoes = [3, 6, 9, 12];
const memories = [];
function predictNext(echoes) {
  const last = echoes[echoes.length - 1];
  const next = last + (last - echoes[echoes.length - 2]);
  // Store the full sequence including the predicted number in memories
    memories.push(...echoes, next);
  return next;
}

console.log(predictNext(echoes)); // 15