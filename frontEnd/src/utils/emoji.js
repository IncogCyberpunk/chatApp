function getRandomEmoji() {
    const emojis = [
        "🥳", "🥺", "🤗", "🤔", "🤭", "🤫", "🤥", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃"
    ];

    // for randomNumber from a to b(inclusive) : Math.floor(Math.random() * (b - a + 1)) + a
    // here (b-a+1) = emojis.length
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}


export default getRandomEmoji;