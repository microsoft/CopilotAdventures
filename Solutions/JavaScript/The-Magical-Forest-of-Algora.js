const loxMoves = ["Twirl", "Leap", "Spin", "Twirl", "Leap"];
const drakoMoves = ["Spin", "Twirl", "Leap", "Leap", "Spin"];

const effects = {
  "TwirlTwirl": "Fireflies light up the forest.",
  "LeapSpin": "Gentle rain starts falling.",
  "SpinLeap": "A rainbow appears in the sky."
};

function danceEffect(loxMove, drakoMove) {
  return effects[`${loxMove}${drakoMove}`] || "A mysterious effect takes place.";
}

function simulateDance(loxMoves, drakoMoves) {
  return loxMoves.map((move, index) => danceEffect(move, drakoMoves[index]));
}

console.log(simulateDance(loxMoves, drakoMoves));
