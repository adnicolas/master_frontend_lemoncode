const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

/* CLONE */

function clone(source) {
    return {...source}
}

const cloned = clone(a);
console.log('CLONED: ', cloned);

/* MERGE */

function merge(source, target) {
    return {...target, ...source}
}

const merged = merge(a, b);
console.log('MERGED: ', merged);