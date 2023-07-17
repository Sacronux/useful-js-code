const findPeakValueIndex = (array, type = 'min') => {
    let peakValueIndex = 0;
    let value = array[peakValueIndex]

    array.forEach((element, index) => {
        if (type === 'min' && element < value) {
            peakValueIndex = index;
            value = element
        }

        if (type === 'max' && element > value) {
            peakValueIndex = index;
            value = element

        }
    })

    return peakValueIndex
}

const sortBySelect = (array, type = 'asc') => {
    const sortedArray = [];

    while(array.length > 0) {
        const peakValueIndex = findPeakValueIndex(array, type === 'asc' ? 'min' : 'max');
        sortedArray.push(array[peakValueIndex])

        array.splice(peakValueIndex, 1);
    }

    return sortedArray;
}

const res = sortBySelect([57, 12, 999, 333, 666], 'desc')
console.log(res)