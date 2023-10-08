const bitonicSearch = (array, int) => {
    let biggest = -Infinity;

    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor(end / 2);

    while (start < end) {
        if (array[middle] < array[middle + 1] || array[middle] === array[middle + 1]) {
            start = middle;
            middle = Math.floor((end + start) / 2)
        } else {
            if (array[middle] > array[middle + 1] && array[middle] > array[middle - 1]) {
                biggest = middle
                break;
            }
            end = middle;
            middle = Math.floor(end / 2);
        }
    }
    
    start = 0;
    end = biggest;
    while (start < end) {
        if (array[middle] < int) {
            start = middle;
            middle = Math.floor((end + start) / 2)
        } else {
            if (array[start] === int) {
                return start
            } else if (array[end] === int) {
                return end
            } else if (array[middle] === int) {
                return middle
            }
            end = middle;
            middle = Math.floor(end / 2);
        }
    }
    start = biggest + 1
    end = array.length - 1
    while (start < end) {
        if (array[middle] > int) {
            start = middle;
            middle = Math.floor((end + start) / 2)
        } else {
            if (array[start] === int) {
                return start
            } else if (array[end] === int) {
                return end
            } else if (array[middle] === int) {
                return middle
            }
            end = middle;
            middle = Math.floor(end / 2);
        }
    }
}

console.log(bitonicSearch([1,2,3,4,8,8,8,8,8,8,8,10,7,4,], 8))