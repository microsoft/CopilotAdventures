// Create a game to display the state of the forest after each sequence of dance moves
// There are two types of creature in the forest: Lox and Faelis
// Each creature can perform one of 3 dance moves: Twirl, Leap or Spin
// The combination of moves from both creatures results in a magical effect on the forest: 
// Twirl + Twirl = Fireflies light up the forest
// Leap + Leap = The forest grows taller
// Spin + Spin = The forest shrinks
// Twirl + Leap = The forest becomes more dense
// Leap + Spin = Gentle rain starts falling
// Spin + Leap = A rainbow appears in the sky
// Twirl + Spin = The forest becomes less dense
// The game consists of 5 sequences of dance moves
// Display the state of the forest after each sequence

// Moves for Lox: Sequence 1 = Twirl, Sequence 2 = Leap, Sequence 3 = Spin, Sequence 4 = Twirl, Sequence 5 = Leap
// Moves for Faelis: Sequence 1 = Spin, Sequence 2 = Twirl, Sequence 3 = Leap, Sequence 4 = Leap, Sequence 5 = Spin

// Define the dance moves for Lox
const loxMoves = ["Twirl", "Leap", "Spin", "Twirl", "Leap"];

// Define the dance moves for Faelis
const faelisMoves = ["Spin", "Twirl", "Leap", "Leap", "Spin"];

// Define the effects of each combination of dance moves
const effects = {
    "TwirlTwirl": "Fireflies light up the forest",
    "LeapLeap": "The forest grows taller",
    "SpinSpin": "The forest shrinks",
    "TwirlLeap": "The forest becomes more dense",
    "LeapSpin": "Gentle rain starts falling",
    "SpinLeap": "A rainbow appears in the sky",
    "TwirlSpin": "The forest becomes less dense",
    "LeapTwirl": "The forest becomes more vibrant",
};

// Function to determine the effect of a dance move
function danceEffect(loxMove, faelisMove) {
    // Return the effect of the combination of the Lox and Faelis dance moves
    // If the combination is not defined in the effects object, return a default effect
    return effects[`${loxMove}${faelisMove}`] || "A mysterious effect takes place.";
}

// Function to simulate the dance
function simulateDance(loxMoves, faelisMoves) {
    // For each dance move in the Lox moves array, get the corresponding Faelis move
    // and determine the effect of the combination
    return loxMoves.map((move, index) => danceEffect(move, faelisMoves[index]));
}
  
// Log the result of the dance simulation
console.log(simulateDance(loxMoves, faelisMoves));
