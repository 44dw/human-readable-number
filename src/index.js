const tillTwenty = new Map([
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
  [10, 'ten'],
  [11, 'eleven'],
  [12, 'twelve'],
  [13, 'thirteen'],
  [14, 'fourteen'],
  [15, 'fifteen'],
  [16, 'sixteen'],
  [17, 'seventeen'],
  [18, 'eighteen'],
  [19, 'nineteen'],
]);


const dozens = new Map([
  [2, 'twenty'],
  [3, 'thirty'],
  [4, 'forty'],
  [5, 'fifty'],
  [6, 'sixty'],
  [7, 'seventy'],
  [8, 'eighty'],
  [9, 'ninety'],
]);

module.exports = function toReadable (number) {
  const arr = String(number).split('').map(n => Number(n));
  switch (arr.length) {
    case 1:
    case 2: {
      if (number < 20) {
        return tillTwenty.get(number);
      }
      if (arr[arr.length - 1] == 0) {
        return dozens.get(arr.shift());
      }
      return `${dozens.get(arr.shift())} ${tillTwenty.get(arr.shift())}`;
    }
    case 3: {
      if (arr[arr.length - 1] == 0 && arr[arr.length - 2] == 0) {
        return `${tillTwenty.get(arr.shift())} hundred`;
      }
      return `${tillTwenty.get(arr.shift())} hundred ${toReadable(Number(arr.join('')))}`;
    }
  }
}