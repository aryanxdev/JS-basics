// THIS BELOW IS AN ITERATOR FUNCTION
let iterator = (start = 0, end = Infinity, step = 1) => {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next() {
            let result;
            if (iterationCount < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true }
        }
    }
    return rangeIterator;
};

const myIterator = iterator(1, 10, 1);
let result = myIterator.next();
while (!(result.done)) {
    console.log(result.value);
    result = myIterator.next();
}

// THIS BELOW IS A GENERATOR FUNCTION

function* generator(start = 0, end = Infinity, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
};

let g = generator(21, 35, 1);

console.log(g.next());
console.log(g.next().value);
console.log(g.next());
console.log(g.next().done);

for (val of g) {
    console.log(val);
}

console.log(g.next().done);