"use strict";
import * as vec from "./math/vec3.js";
// Vectors will be stored using arrays ([x, y, z])


console.log(vec.add([1, 2, 3], [4, 5, 6]));
console.log(vec.sub([4, 5, 6], [1, 2, 3]));
console.log(vec.scale([1, 2, 3], 2));
console.log(vec.dot([1, 2, 3], [4, 5, 6]));
console.log(vec.length([3, 4, 0]));
console.log(vec.normalize([0, 0, 5]));

const a = [1,2,3];

console.log(vec.add(a, a));
console.log(a);