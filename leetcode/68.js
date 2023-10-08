/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const lengths = {}
    const rows = [[]];
    let rowId = 0

    for (let i = 0; i < words.length; i++) {

        const word = words[i];

        if (lengths[rowId] + word.length + 1 > maxWidth) {
            rowId += 1;
            rows[rowId] = []
        }
        rows[rowId].push(word)
        if (lengths[rowId] === undefined) {
            lengths[rowId] = 0
        }
        lengths[rowId] += lengths[rowId] === 0 ? word.length : word.length + 1;
    }

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let spacesLeft = maxWidth - lengths[i] + row.length - 1;
        if (row.length === 1) {
            const resultString = `${row[0]}${' '.repeat(spacesLeft)}`;
            rows[i] = resultString;
            continue;
        }
        let wordIdx = 1;
        while (spacesLeft > 0) {
            row[wordIdx] = ' ' + row[wordIdx];
            spacesLeft--
            if (wordIdx === row.length - 1 && i === rows.length - 1) {
                row[wordIdx] = row[wordIdx] + ' '.repeat(spacesLeft);
                spacesLeft = 0;
            }
            wordIdx < row.length - 1 ? wordIdx++ : (wordIdx = 1)
            
        }
        rows[i] = row.join('')
    }
    return rows
};