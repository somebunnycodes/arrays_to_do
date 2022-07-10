const sailorScouts = ["Moon", "Venus", "Mars", "Mercury", "Jupiter", "Chibi Moon"]

// Reverse
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. 
// Working 'in-place' means that you cannot use a second array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().copy

const reverse = (arr) => {
    for (let i=0; i<arr.length/2; i++) {
        const temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i];
        arr[i] = temp;
    }
}

reverse(sailorScouts);
console.log(sailorScouts);
reverse(sailorScouts);
console.log(sailorScouts);

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 
// 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.copy

const rotate = (arr, shiftBy) => {
    const rotations = shiftBy % arr.length;
    if (rotations > 0) {
        for (let i=0; i<rotations; i++) {
            rotateRight(arr);
        }
    } else if (rotations < 0) {
        for (let i=0; i<-rotations; i++) {
            rotateLeft(arr);
        }
    }
}

const rotateLeft = (arr) => {
    const temp = arr[0];
    for (let i=0; i<arr.length-1; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
}

const rotateRight = (arr) => {
    const temp = arr[arr.length-1];
    for (let i=arr.length-1; i>0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = temp;
}

console.log("rotate:");

rotate(sailorScouts, 1);
console.log(sailorScouts);
rotate(sailorScouts, -1);
console.log(sailorScouts);


rotate(sailorScouts, 2);
console.log(sailorScouts);
rotate(sailorScouts, -2);
console.log(sailorScouts);

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. No built-in array functions.copy

const filterRange = (arr, min, max) => {
    let j = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] >= min && arr[i]<= max) {
            arr[j] = arr[i];
            j++;
        }
    }
    arr.length = j;
    return arr;
}

console.log(filterRange([1,4,2,5,3,6], 2, 5));

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array's elements, followed by the second array's elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

const arrConcat = (arr1, arr2) => {
    const arr = [];
    for (let i=0; i<arr1.length; i++) {
        arr[i] = arr1[i];
    }
    for (let i=0; i<arr2.length; i++) {
        arr[i + arr1.length] = arr2[i];
    }
    return arr;
}

console.log(arrConcat(["SMoon", "SMoon R"], ["SMoon S", "Eternal SMoon"]));