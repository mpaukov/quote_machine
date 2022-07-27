function getRandomHexColor() {
  let random = "";
  while (random.length < 6) {
    random = Math.floor(Math.random() * 16777215).toString(16);
  }
  return `#${random}`;
}

export default getRandomHexColor;
