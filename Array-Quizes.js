// find a peak element that is not smaller than its neighbour

// example
// const array1 = [4,5,15,30,18]; // 30 is the peak element
// const array2 = [10, 20, 15, 2, 23, 90, 67]; // 20 and 90 are the peak elements

// if the elements are sorted in ascending order, the last element is always a peak element
// if the elements are sorted in descending order, the first element is always a peak element
// if the elements are all equal, each element is a peak element

// treverse the array
// compare the current element with its neighbours (i.e the elements at index i-1 and i+1)
// if the current element is greater than both its neighbours, it is a peak element
// if the current element is smaller than its left neighbour, it is not a peak element
// if the current element is smaller than its right neighbour, it is not a peak element
// if the current element is equal to its left neighbour, it is not a peak element
// if the current element is equal to its right neighbour, it is not a peak element
// if array[i] > array[i-1] && array[i+] => array[i] is a peak element

function findPeak(arr){
    const n = arr.length;

    for(let i = 1;i < n - 1; i++){
        if(arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]){
            return arr[i]
        }
    }
    return -1;
}

const array = [10,20,5, 2, 23, 90, 67];
const peakElement = findPeak(array);
console.log(peakElement)