
function bubbleSort(arr) {
  for(let pass = arr.length - 1; pass > 0; pass--) {
    for(let i = 0; i < pass; i++) {
      if(arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        console.log(arr.join(","));
      }
    }
    if(pass === arr.length) {
      return;
    }
  }
}



module.exports = bubbleSort;
