const nuts = ['Peanut', 'Almond', 'Nut', 'Hazelnut'];

/* HEAD */
const head = (array) => {
    const [firstItem] = array;
    return firstItem;
}

console.log(`First element: ${head(nuts)}`);

/* TAIL */
const tail = (array) => {
    const [firstItem, ...restItems] = array;
    return restItems;
}

console.log(`All elements but first one: ${tail(nuts)}`);

/* INIT */
const init = (array) => array.slice(0, -1);

console.log(`All elements but last one: ${init(nuts)}`);

/* LAST */
const last = (array) => array.slice(-1, array.length);

console.log(`Last element: ${last(nuts)}`);