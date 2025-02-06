// src/lib/vector.ts
var Vector = {
  add: function(Vec_One, Vec_Two) {
    return {
      x: Vec_One.x + Vec_Two.x,
      y: Vec_One.y + Vec_Two.y
    };
  }
};

// src/main.ts
console.log("Uguu!");
console.log(Vector.add({ x: 0, y: 1 }, { x: 0, y: 1 }));
function normalize(a) {
  const h = Math.sqrt(a.x * a.x + a.y * a.y);
  return {
    x: a.x / h,
    y: a.y / h
  };
}
console.log(normalize({ x: 54, y: 97 }));
