const loxMoves = ["Twirl", "Leap", "Spin", "Twirl", "Leap"];
const faelisMoves = ["Spin", "Twirl", "Leap", "Leap", "Spin"];

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

function danceEffect(loxMove, faelisMove) {
    return effects[`${loxMove}${faelisMove}`] || "A mysterious effect takes place.";
}

function simulateDance(loxMoves, faelisMoves) {
    return loxMoves.map((move, index) => danceEffect(move, faelisMoves[index]));
}
  
console.log(simulateDance(loxMoves, faelisMoves));
