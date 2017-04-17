const Rebel = require('../models/rebel');

module.exports = {
  getRebels: getRebels
}

const rebels = [
  new Rebel(10, 'Jyn Erso', 1),
  new Rebel(11, 'Cassian Andor', 2),
  new Rebel(12, 'K-2SO', 3),
  new Rebel(13, 'Saw Gererra', 4),
  new Rebel(14, 'Chirrut Îmwe', 5),
  new Rebel(15, 'Baze Malbus', 5),
  new Rebel(16, 'Bodhi Rook', 5),
  new Rebel(17, 'Mon Mothma', 6),
  new Rebel(18, 'Galen Erso', 7),
  new Rebel(19, 'Bail Organa', 8),
  new Rebel(20, 'Leia Organa', 8),
  new Rebel(21, 'Lyra Erso', 9)
];

function getRebels() {
  return rebels;
}
