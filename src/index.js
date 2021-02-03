module.exports = function toReadable(number) {
    const p1 = Math.floor(number / 100);
    const p2 = Math.floor((number - (p1 * 100)) / 10)
    const p3 = number - (p1 * 100) - (p2 * 10)

    const letters = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    if (letters[number] !== undefined) return letters[number]
    else {
        if (number.toString().split('').length == 2) {
            return letters[p2 * 10] + ' ' + letters[p3]
        } else {
            if (letters[p2 * 10 + p3] !== undefined) {
                if (p3 != 0 || p2 != 0) {
                    return letters[p1] + ' hundred ' + letters[p2 * 10 + p3]
                } else {
                    return letters[p1] + ' hundred'
                }
            } else {
                if (p3 != 0) {
                    return letters[p1] + ' hundred ' + letters[p2 * 10] + ' ' + letters[p3]
                } else {
                    return letters[p1] + ' hundred ' + letters[p2 * 10]
                }
            }
        }
    }
}
