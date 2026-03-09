// Array methods - 100+ qator amaliy misollar

const numbers = [3, 7, 2, 9, 12, 5, 18, 1];
const names = ['Ali', 'Vali', 'Sami', 'Laylo', 'Nodir'];
const mixed = [10, 'text', true, null, { id: 1 }, [1, 2]];

console.log('1) numbers:', numbers);
console.log('2) names:', names);
console.log('3) mixed:', mixed);

// 1. length
console.log('length:', numbers.length);

// 2. at
console.log('first:', numbers.at(0));
console.log('last:', numbers.at(-1));

// 3. push / pop
const stack = [1, 2, 3];
stack.push(4);
console.log('push:', stack);
stack.pop();
console.log('pop:', stack);

// 4. unshift / shift
const queue = ['b', 'c'];
queue.unshift('a');
console.log('unshift:', queue);
queue.shift();
console.log('shift:', queue);

// 5. includes / indexOf / lastIndexOf
const fruits = ['apple', 'banana', 'apple', 'orange'];
console.log('includes apple:', fruits.includes('apple'));
console.log('indexOf apple:', fruits.indexOf('apple'));
console.log('lastIndexOf apple:', fruits.lastIndexOf('apple'));

// 6. slice
const part = numbers.slice(2, 6);
console.log('slice(2,6):', part);

// 7. splice (mutating)
const spliceSample = [10, 20, 30, 40, 50];
const removed = spliceSample.splice(1, 2, 99, 100);
console.log('splice removed:', removed);
console.log('splice result:', spliceSample);

// 8. concat
const a1 = [1, 2];
const a2 = [3, 4];
console.log('concat:', a1.concat(a2, [5, 6]));

// 9. join
console.log('join -:', names.join(' - '));

// 10. reverse (mutating)
const rev = [...numbers];
rev.reverse();
console.log('reverse:', rev);

// 11. sort
const sortedAsc = [...numbers].sort((x, y) => x - y);
const sortedDesc = [...numbers].sort((x, y) => y - x);
console.log('sort asc:', sortedAsc);
console.log('sort desc:', sortedDesc);

// 12. map
const doubled = numbers.map((n) => n * 2);
console.log('map doubled:', doubled);

// 13. filter
const evens = numbers.filter((n) => n % 2 === 0);
console.log('filter even:', evens);

// 14. reduce
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log('reduce sum:', total);

// 15. find / findIndex
const firstBig = numbers.find((n) => n > 10);
const firstBigIndex = numbers.findIndex((n) => n > 10);
console.log('find >10:', firstBig);
console.log('findIndex >10:', firstBigIndex);

// 16. some / every
console.log('some >15:', numbers.some((n) => n > 15));
console.log('every >0:', numbers.every((n) => n > 0));

// 17. flat / flatMap
const nested = [1, [2, 3], [4, [5, 6]]];
console.log('flat(1):', nested.flat(1));
console.log('flat(2):', nested.flat(2));
const words = ['hello world', 'js array'];
const splitWords = words.flatMap((w) => w.split(' '));
console.log('flatMap:', splitWords);

// 18. Array.from / Array.of
const fromStr = Array.from('salom');
const ofValues = Array.of(7, 8, 9);
console.log('Array.from:', fromStr);
console.log('Array.of:', ofValues);

// 19. fill / copyWithin
const fillArr = new Array(5).fill(0);
fillArr.fill(1, 1, 4);
console.log('fill:', fillArr);
const copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3);
console.log('copyWithin:', copyArr);

// 20. keys / values / entries
const letters = ['x', 'y', 'z'];
for (const k of letters.keys()) console.log('key:', k);
for (const v of letters.values()) console.log('value:', v);
for (const [i, val] of letters.entries()) console.log('entry:', i, val);

// 21. forEach
names.forEach((name, idx) => {
  console.log(`forEach ${idx + 1}: ${name}`);
});

// 22. toSorted / toReversed / toSpliced (non-mutating)
const newSorted = numbers.toSorted((a, b) => a - b);
const newReversed = numbers.toReversed();
const newSpliced = numbers.toSpliced(2, 2, 100, 200);
console.log('toSorted:', newSorted);
console.log('toReversed:', newReversed);
console.log('toSpliced:', newSpliced);
console.log('original numbers (unchanged):', numbers);
