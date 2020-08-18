//using recursion
//base condition if statr index is greater than end index retirn false
//compute the middle index
//compare the mddle element with number x. if equal return true
//if greater, call same func with ending index = middle-1 and repeat step1.
//if smaller,call same func with starting index = middle+1 and repeat step1.

let recfunc = function (arr, x, start, end) {
  if (strat > end) {
    return false;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) {
    return true;
  }

  if (arr[mid] > x) {
    return recfunc(arr, x, start, mid - 1);
  } else {
    return recfunc(arr, x, mid + 1, end);
  }
};

let arr = [1, 2, 3, 4, 5];
let x = 5;

if (recfunc(arr, x, 0, arr.length - 1)) document.write("elememnt found!");
else document.write("ëlement not found");

//================================================================
//iterative approach
let itrfunc = function (arr, x) {
  let start = 0,
    end = arrr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start, end) / 2);
    if (arr[mid] === x) {
      return true;
    } else if (arr[mid] > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};

let arr1 = [1, 2, 3, 4, 5];
if (itrfunc(arr, x, 0, arr.length - 1)) document.write("elememnt found!");
else document.write("ëlement not found");
