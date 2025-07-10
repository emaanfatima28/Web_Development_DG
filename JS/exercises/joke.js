const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why did the math book look sad? Because it had too many problems.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "What do you call fake spaghetti? An impasta!",
  "I would tell you a construction joke, but I’m still working on it.",
  "Why can’t your nose be 12 inches long? Because then it would be a foot.",
  "What did one wall say to the other wall? I’ll meet you at the corner."
];

const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

document.getElementById("joke").innerHTML = randomJoke;
