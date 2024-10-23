const getRandomItem = (arr) => {
    if (!arr.length) return null
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

module.exports = getRandomItem;