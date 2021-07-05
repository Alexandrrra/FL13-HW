const letterCount = (string, letter) => {
    return (string.split(letter).length - 1);
}
letterCount("Maggy", "g");