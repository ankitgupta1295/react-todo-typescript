const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

export const generateId = () => {
    let num: number = 0
    for (let i = 0; i < numbers.length; i++) {
        num = (num * 10) + numbers[Math.floor(Math.random() * numbers.length)];
    }
    return num;
}