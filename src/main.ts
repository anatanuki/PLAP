import { Vector, type vector } from "./lib/vector";

console.log("Uguu!");
console.log(Vector.add(
    {x: 0, y: 1},
    {x: 0, y: 1}
));

function normalize (a: vector) {
    const h = Math.sqrt(a.x * a.x + a.y * a.y);
    return {
        x: a.x / h,
        y: a.y / h
    }
}

console.log(normalize({x: 54, y: 97}));

function wipe (Container: any) {
    const length = Container.items.length;
    if (length > 0) {
        Container.items = [];
    }
}
const invalid       = [1, 2, 3];
const valid         = {items: [4, 3, 2]}
const another_valid = {data: true, items: [1, 2]}

wipe(invalid);
wipe(valid);
wipe(another_valid);
