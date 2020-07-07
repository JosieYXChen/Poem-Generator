export const getRandomNum = (max, min = 0) => {
    return Math.floor(Math.random() * Math.floor(max - min) + Math.floor(min));
}