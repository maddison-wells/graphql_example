let games = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch", "Wii U"],
  },
  {
    id: "2",
    title: "Red Dead Redemption 2",
    platform: ["PlayStation 4", "Xbox One", "PC"],
  },
  {
    id: "3",
    title: "The Witcher 3: Wild Hunt",
    platform: ["PlayStation 4", "Xbox One", "PC"],
  },
];

let reviews = [
  {
    id: "1",
    gameId: "1",
    rating: 9,
    content:
      "This game is amazing! I love the open-world exploration and the freedom it offers.",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    gameId: "2",
    rating: 10,
    content:
      "A masterpiece! The story, characters, and open world are simply phenomenal.",
    author_id: "2",
    game_id: "2",
  },
];
let authors = [
  {
    id: "1",
    name: "John Doe",
    verified: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    verified: false,
  },
];

export default { games, authors, reviews };
